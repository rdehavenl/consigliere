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
  render: function(){
    var masterFormDisplay = 'initial';
    this.state.accounts.forEach(function(account){
      if(account.type == 'master')
        masterFormDisplay = 'none';
    });
    return (
      <MasterAccountForm display={masterFormDisplay}/>
    )
  }
});
