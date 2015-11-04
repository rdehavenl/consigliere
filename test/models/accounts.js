var chai = require("chai");
var expect = chai.expect;
var should = chai.should();
var accounts = require('../../src/models/accounts');

describe("Accounts Model", function() {

  describe("Initialize", function() {
    it("Initializes Accounts Model",function(done){
      accounts.init(function(err){
        should.not.exist(err);
        done();
      });
    });
  });
  describe("Purge", function(){
    it("Purges all records from database", function(done){
      accounts.purge(function(err){
        should.not.exist(err);
        done();
      })
    })
  });
  describe("Add Single Account", function() {
    it("Adds a single account",function(done){
      accounts.addSingleAccount("12345","ACCOUNT-A","arn:for:account:a",function(err){
        should.not.exist(err);
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
        should.not.exist(err);
        done();
      });
    });
  });
  describe("Add duplicate account", function(){
    it("Fails to add a duplicate account", function(done){
      accounts.addSingleAccount("12345","ACCOUNT-A","arn:for:account:a",function(err){
        should.exist(err);
        done();
      });
    });
  });
  describe("Get Accounts", function(){
    it("Gets list of accounts",function(done){
      var matchArray = [
        {accountNumber:"12345",accountName:"ACCOUNT-A",roleArn:"arn:for:account:a"},
        {accountNumber:"23456",accountName:"ACCOUNT-B",roleArn:"arn:for:account:b"},
        {accountNumber:"34567",accountName:"ACCOUNT-C",roleArn:"arn:for:account:c"}
      ]
      accounts.getAccounts(function(err,listOfAccounts){
        should.not.exist(err);
        expect(listOfAccounts).to.deep.equal(matchArray);
        done();
      });
    });
  });

  describe("Get account by id", function(){
    it("Gets account by id", function(done){
      var expectedAccount = {accountNumber:"12345",accountName:"ACCOUNT-A",roleArn:"arn:for:account:a"};
      accounts.getAccountById("12345",function(err,account){
        should.not.exist(err);
        expect(account).to.deep.equal(expectedAccount);
        done();
      });
    });
  });

  describe("Close", function() {
    it("Closes any database connections",function(done){
      accounts.close(function(err){
        should.not.exist(err);
        done();
      });
    });
  });
});
