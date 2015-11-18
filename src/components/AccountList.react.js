var React = require('react');
var ReactDOM = require('react-dom');
var Account = require('./Account.react');

module.exports = React.createClass({
  render: function(){
    var content = this.props.accounts.map(function(account){
      return (
        <Account key={account.accountNumber} name={account.accountName} number={account.accountNumber} />
      )
    });
    return (
      <div className="accountList">
        {content}
      </div>
    )
  }
});
