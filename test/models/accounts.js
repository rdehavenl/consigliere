var expect    = require("chai").expect;
var accounts = require('../../src/models/accounts');

describe("Accounts Model", function() {

  describe("Initialize", function() {
    it("Initializes Accounts Model",function(done){
      accounts.init(function(err){
        expect(err).equal(null);
        done();
      });
    });
  });
  describe("Purge", function(){
    it("Purges all records from database", function(done){
      accounts.purge(function(err){
        expect(err).equal(null);
        done();
      })
    })
  })
  describe("Add Single Account", function() {
    it("Adds a single account",function(done){
      accounts.addSingleAccount("12345","ACCOUNT-A","arn:for:account:a",function(err){
        expect(err).equal(null);
        done();
      });
    });
  });
  describe("Add Multiple Accounts", function(){
    it("Adds multiple accounts",function(done){
      var accountsArray = [
        {accountNumber:"23456",accountName:"ACCOUNT-B",roleArn:"arn:for:account:b"},
        {accountNumber:"34567",accountName:"ACCOUNT-C",roleArn:"arn:for:account:c"}
      ];
      accounts.addMultipleAccounts(accountsArray,function(err){
        expect(err).equal(null);
        done();
      });
    });
  });
  describe("Get Accounts", function(){
    it("Gets list of accounts",function(done){
      accounts.getAccounts(function(err,listOfAccounts){
        expect(err).equal(null);
        done();
      });
    });
  });

  describe("Close", function() {
    it("Closes any database connections",function(done){
      accounts.close(function(err){
        expect(err).equal(null);
        done();
      });
    });
  });
});
