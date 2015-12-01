var Hapi = require('hapi');
var Path = require('path');
var Hapi = require('hapi');
var Hoek = require('hoek');
var AWS = require('aws-sdk');
var mAccounts = require('./models/accounts');
var scheduler = require('./lib/scheduler');
var statFetcher = require('./lib/statfetcher');
var auth = require('./lib/auth');

mAccounts.init();

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.register(require('vision'), function (err) {

    Hoek.assert(!err, err);

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views',
        layoutPath: 'views/layout',
        layout: 'default',
        partialsPath: 'views/partials'
    });
    server.register(require('inert'), function (err) {

        Hoek.assert(!err,err);
        server.route({
          method: 'GET',
          path: '/favicon.ico',
          handler: {
            file: './public/images/favicon.png'
          }
        });

        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
              mAccounts.find({},function(err,accounts){
                if(!err){
                  reply.view('index',{accounts: accounts});
                }
              });

            }
        });

        // GET list of accounts
        server.route({
          method: 'GET',
          path: '/api/accounts',
          handler: function(request, reply) {
              mAccounts.find({},function(err,accounts){
                if(!err){
                  reply(accounts);
                }
              });
          }
        });
        // POST (save) an account
        server.route({
          method: 'POST',
          path: '/api/accounts',
          handler: function(request,reply) {
            var account = new mAccounts();
            console.log(request.payload);
            if(typeof request.payload.accountName != 'undefined')
              account.accountName = request.payload.accountName;

            if(typeof request.payload.accountNumber != 'undefined')
              account.accountNumber = request.payload.accountNumber;

            if(typeof request.payload.type != 'undefined')
              account.type = request.payload.type;

            if(typeof request.payload.roleArn != 'undefined')
              account.roleArn = request.payload.roleArn;

            if(typeof request.payload.accessKey != 'undefined')
              account.accessKey = request.payload.accessKey;

            if(typeof request.payload.accessSecret != 'undefined')
              account.accessSecret = request.payload.accessSecret;

            if(typeof request.payload.choice != 'undefined')
              account.choice = request.payload.choice;

            account.save(function(err){
              if(!err){
                // Kick off cron after adding account
                scheduler.scheduleSingle(account);
                reply(account).code(201);

              }
              else {
                switch(err.code){
                  case 11000:
                    reply('Duplicate record').code(400);
                    break;
                  default:
                    reply('Unknown Error').code(500);
                    break;
                }
              }
            });
          }
        });
        //PUT (update) an account
        server.route({
          method: 'PUT',
          path: '/api/accounts',
          handler: function(request,reply) {
            mAccounts.findOne({accountNumber:request.payload.accountNumber},function(err,account){
              if(err){
                console.log(err)
                reply("Failed").code(400);
              }
              else {
                if(typeof request.payload.accountName != 'undefined')
                  account.accountName = request.payload.accountName;

                if(typeof request.payload.type != 'undefined')
                  account.type = request.payload.type;

                if(typeof request.payload.roleArn != 'undefined')
                  account.roleArn = request.payload.roleArn;

                if(typeof request.payload.accessKey != 'undefined')
                  account.accessKey = request.payload.accessKey;

                if(typeof request.payload.accessSecret != 'undefined')
                  account.accessSecret = request.payload.accessSecret;

                if(typeof request.payload.choice != 'undefined')
                  account.choice = request.payload.choice;

                account.update(function(err){
                  if(!err){
                    reply(account).code(202);
                  }
                  else {
                    switch(err.code){
                      case 11000:
                        reply('Duplicate record').code(400);
                        break;
                      default:
                        reply('Unknown Error').code(500);
                        break;
                    }
                  }
                });
              }
            });
          }
        });
        // DELETE an account
        server.route({
          method: 'DELETE',
          path: '/api/accounts',
          handler: function(request,reply) {
            mAccounts.findOne({accountNumber:request.payload.accountNumber},function(err,account){
              if(err){
                console.log(err);
                reply("Failed").code(400);
              }
              else {
                account.remove(function(err){
                  if(err){
                    console.log(err);
                    reply("Failed").code(500);
                  }
                  else {
                    reply("Deleted").code(204);
                  }
                });
              }
            });
          }
        });

        server.route({
          method: 'POST',
          path: '/api/authtest',
          handler: function(request,reply){
            auth.getSupport(request.payload,function(err,support){
              var params = {
                language: 'en'
              };
              support.describeTrustedAdvisorChecks(params, function(err, data) {
                if (err){
                  reply({"result":"failed"}).code(400);
                }
                else {
                  reply({"result":"success"}).code(200);
                }
              });
            });
          }
        });

        server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: __dirname + '/public'
                }
            }
        });

        server.start(function () {
            console.log('Server running at:', server.info.uri);
        });
    });
});
