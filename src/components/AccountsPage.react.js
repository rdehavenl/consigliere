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
    jquery.get('api/accounts',function(data){
      this.setState({accounts:data});
    }.bind(this));
  },
  render: function(){
    return (
      <AccountForm />
    )
  }
});
