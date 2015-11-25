var React = require('react');
var ReactDOM = require('react-dom');
var jquery = require('jquery');
var AccountForm = require('./AccountForm.react');
var MasterAccountForm = require('./MasterAccountForm.react');
var AccountList = require('./AccountList.react');
var MasterAccount = require('./MasterAccount.react');

module.exports = React.createClass({
  getInitialState : function() {
    return {accounts:[]};
  },
  componentDidMount: function() {
    jquery.get('api/accounts',function(data){
      this.setState({accounts:data});
    }.bind(this));
  },
  handleMasterSubmit : function(account){
    account.type = 'master';
    jquery.ajax({
      url: 'api/accounts',
      dataType: 'json',
      type: 'POST',
      data: account,
      success: function(data) {
        jquery.get('api/accounts',function(data){
          this.setState({accounts:data});
        }.bind(this));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }
    });
  },
  handleSlaveSubmit : function(account){
    account.type = 'slave';
    jquery.ajax({
      url: 'api/accounts',
      dataType: 'json',
      type: 'POST',
      data: account,
      success: function(data) {
        jquery.get('api/accounts',function(data){
          this.setState({accounts:data});
        }.bind(this));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }
    });
  },
  handleAccountDelete : function(account){
    jquery.ajax({
      url: 'api/accounts',
      dataType: 'json',
      type: 'DELETE',
      data: account,
      success: function(data){
        jquery.get('api/accounts',function(data){
          this.setState({accounts:data});
        }.bind(this));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }
    });
  },
  render: function(){
    var masterFormDisplay = 'initial';
    var additionalFormDisplay ='none';
    this.state.accounts.forEach(function(account){
      if(account.type == 'master'){
        masterFormDisplay = 'none';
        additionalFormDisplay = 'initial';
      }
    });
    return (
      <div>
        <MasterAccountForm display={masterFormDisplay} onMasterSubmit={this.handleMasterSubmit}/>
        <AccountList accounts={this.state.accounts} onDelete={this.handleAccountDelete}/>
        <AccountForm display={additionalFormDisplay} onSlaveSubmit={this.handleSlaveSubmit}/>
      </div>

    )
  }
});
