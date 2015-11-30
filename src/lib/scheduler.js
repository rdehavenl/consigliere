var Scheduler = {};
var mAccounts = require('../models/accounts');
var CronJob = require('cron').CronJob;
var statFetcher = require('./statfetcher');
var config = require('config');


Scheduler.scheduleSingle = function(account){
  statFetcher.fetchStatsFor(account);
  var job = new CronJob({
    cronTime: config.Scheduler.CronPattern,
    onTick: function(){
      statFetcher.fetchStatsFor(account);
    },
    start: true
  });
}

Scheduler.loadFromDatabase = function(){
  mAccounts.find({}, function(err,accounts){
    if(!err){
      accounts.forEach(function(account){
        Scheduler.scheduleSingle(account);
      });
    }
  });
}

module.exports = Scheduler;
