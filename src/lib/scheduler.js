var Scheduler = {};
var mAccounts = require('../models/accounts');
var CronJob = require('cron').CronJob;
var statFetcher = require('./statfetcher');
var config = require('config');


Scheduler.scheduleSingle = function(accountNumber){
  statFetcher.fetchStatsFor(accountNumber);
  var job = new CronJob({
    cronTime: config.Scheduler.CronPattern,
    onTick: function(){
      statFetcher.fetchStatsFor(accountNumber);
    },
    start: true
  });
}

Scheduler.loadFromDatabase = function(){

}

module.exports = Scheduler;
