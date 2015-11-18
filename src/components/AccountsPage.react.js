var React = require('react');
var ReactDOM = require('react-dom');
var jquery = require('jquery');
var AccountForm = require('./AccountForm.react');
var AccountList = require('./AccountList.react');
var MasterAccount = require('./MasterAccount.react');

module.exports = React.createClass({
  getInitialState : function() {
    return {accounts:[]};
  },
  componentDidMount: function() {
    var that = this;
    jquery.get('api/accounts',function(data){
      that.setState({accounts:data});
    });
  },
  render: function(){
    return (
      <div className="accountsPage">
        <MasterAccount name="name" accessKey="FOOBAR" />
        <AccountForm />
        <AccountList accounts={this.state.accounts}/>
        <AccountForm />
      </div>
    )
  }
});
