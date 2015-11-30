var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/consigliere');


var accountSchema = new Schema({
  accountName: { type: String, required: true, unique: true },
  type: { type: String, required: true},
  choice: { type: String, required: true},
  roleArn: String,
  accessKey: String,
  accessSecret: String,
  accountNumber: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date,
  refreshStatus: String,
  lastRefreshed : Date,
  lastRefreshStatus: String,
  lastRefreshReason: String
});

accountSchema.pre('save',function(next){
  var currentDate = new Date();
  this.updated_at = currentDate;
  if(!this.created_at)
    this.created_at = currentDate;
  next();
});

accountSchema.methods.close = function(callback){
  mongoose.connection.close(function(err){
    if(err){
      callback(err);
    }
    else {
      callback(null);
    }
  })
}

var Account = mongoose.model('Account', accountSchema);

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
});

module.exports = Account;
