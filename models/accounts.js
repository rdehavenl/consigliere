var config = require('config');
var sqlite3 = require('sqlite3').verbose();

var Accounts = {};

// Open Sqlite3 DB file
Accounts.init = function(callback){
  var dbPath; // database path
  // Relative or Absolute path to Sqlite3 DB file
  switch(config.Database.file.type){
    case 'absolute':
      dbPath = config.Database.file.path;
      break;
    default:
      // go up one level to avoid creation under __dirname/models
      dbPath = __dirname+'/../'+config.Database.file.path;
      break;
  }
  this.db = new sqlite3.Database(dbPath);
  this.db.run("CREATE TABLE IF NOT EXISTS accounts (accountNumber TEXT PRIMARY KEY, accountName TEXT, roleArn TEXT)",callback);
}

Accounts.getAccounts = function(callback){
  var accounts = [];
  //Iterate through each row in accounts table
  this.db.each("SELECT * FROM accounts", function(err, row) {
    if(!err){
      accounts.push(row);
    }
  }, function(err,numberOfRows){
    if(!err){
      //return accounts list on completion callback
      callback(null,accounts);
    }
  });
};

Accounts.addMultipleAccounts = function(accounts,callback){
  var stmt = this.db.prepare("INSERT INTO accounts VALUES (?,?,?)");
  for (var i = 0; i < accounts.length; i++) {
      stmt.run(accounts[i].accountNumber,accounts[i].accountName,accounts[i].roleArn);
  }
  stmt.finalize(callback);
}

Accounts.addSingleAccount = function(accountNumber,accountName,roleArn,callback){
  var stmt = this.db.prepare("INSERT INTO accounts VALUES (?,?,?)");
  stmt.run(accountNumber,accountName,roleArn,callback);
}

Accounts.close = function(callback){
  this.db.close(callback);
}

module.exports = Accounts;
