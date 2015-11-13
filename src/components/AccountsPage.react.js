var React = require('react');
var ReactDOM = require('react-dom');
var AccountForm = require('./AccountForm.react');
var AccountList = require('./AccountList.react');
var MasterAccount = require('./MasterAccount.react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="accountsPage">
        <MasterAccount name="name" accessKey="FOOBAR" />
        <AccountForm />
        <AccountList accounts={this.props.accounts}/>
        <AccountForm />
      </div>
    )
  }
});
