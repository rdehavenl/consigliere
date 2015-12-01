var StatFetcher = {};
var aws = require('aws-sdk');
var auth = require('./auth');
var config = require('config');
var redis = require("redis");
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
  
}

StatFetcher.getStatusCountsForAll = function(callback){
  mAccounts.find({},function(err,accounts){
    if(!err){
      accounts.forEach(function(account){

      })
    }
    else {
      callback(err);
    }
  });
}

module.exports = StatFetcher;
