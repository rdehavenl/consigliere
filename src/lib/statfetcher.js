var StatFetcher = {};
var aws = require('aws-sdk');
var auth = require('./auth');
var config = require('config');
var redis = require("redis");
var async = require('async');
var mAccounts = require('../models/accounts');


client = redis.createClient(process.env.REDIS_URL || 'redis://127.0.0.1/6379');

client.on("error", function (err) {
    console.log("Error " + err);
});

StatFetcher.fetchStatsFor = function(account){
  auth.getSupport(account,function(err,support){
    var params = {
      language: config.Defaults.AWS.Support.Language
    };
    support.describeTrustedAdvisorChecks(params, function(err, data) {
      if (err) {
        console.log(err);
      }
      else {
        console.log('%j',data);
        client.set(account.accountNumber+'_checks', JSON.stringify(data));
        var checkIds = [];
        data.checks.forEach(function(check){
          checkIds.push(check.id);
          var params = {
            checkId:check.id,
            language:config.Defaults.AWS.Support.Language
          };
          support.describeTrustedAdvisorCheckResult(params, function(err, data) {
            if (err) {
              console.log(err);
            }
            else {
              client.set(account.accountNumber+'_result_'+check.id,JSON.stringify(data));
            }
          });
        });
        var params = {
          checkIds : checkIds
        };
        support.describeTrustedAdvisorCheckSummaries(params, function(err, data) {
          if (err){
            console.log(err);
          }
          else {
            client.set(account.accountNumber+'_summaries', JSON.stringify(data));
          }
        });
      }
    });
  });
}

StatFetcher.getStatsForAccount = function(account,callback){
  client.keys(account.accountNumber+'_*',function(err,replies){
    if(!err){
      console.log(replies);
    }
    else {
      callback(err);
    }
  });
}

StatFetcher.getStatusCountsForAccount = function(account,callback){
  client.get(account.accountNumber+'_summaries',function(err,data){
    if(!err){
      var counts = {
        security : {
          not_available :0,
          error:0,
          warning:0,
          ok:0
        },
        performance : {
          not_available :0,
          error:0,
          warning:0,
          ok:0
        },
        cost_optimizing : {
          not_available :0,
          error:0,
          warning:0,
          ok:0
        },
        fault_tolerance : {
          not_available :0,
          error:0,
          warning:0,
          ok:0
        }
      };
      var summaries = JSON.parse(data);
      client.get(account.accountNumber+'_checks',function(err,data){
        if(!err){
          var checks = JSON.parse(data);
          summaries.summaries.forEach(function(summary){
            checks.checks.forEach(function(check){
              if(summary.checkId == check.id){
                counts[check.category][summary.status] = counts[check.category][summary.status] + 1;
              }
            });
          });
          callback(null,counts);
        }
        else {
          callback(err);
        }
      });

    }
    else {
      callback(err);
    }
  });
}

StatFetcher.getStatusCountsForAll = function(callback){
  mAccounts.find({},function(err,accounts){
    if(!err){
      var calls = [];
      var counts = [];
      accounts.forEach(function(account){
        calls.push(function(hollaback){
          StatFetcher.getStatusCountsForAccount(account,function(err,res){
            if(!err){
              counts.push({account:account, counts:res});
              hollaback();
            }
            else {
              hollaback(err);
            }
          });
        });
      });
      async.parallel(calls,function(err,res){
        if(!err){
          callback(null,counts);
        }
        else {
          callback(err);
        }
      });
    }
    else {
      callback(err);
    }
  });
}

module.exports = StatFetcher;
