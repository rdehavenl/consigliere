var React = require('react');
var ReactDOM = require('react-dom');
var Account = require('./Account.react');

module.exports = React.createClass({
  render: function(){
    var content = this.props.accounts.map(function(account){
      if(account.type == 'master'){
        return (
          <Account type='master' key={account.accountNumber} account={account}  />
        )
      }
      else {
        return (
          <Account type='slave' key={account.accountNumber} account={account}  />
        )
      }

    });
    return (
      <div className="accountList">
        {content}
      </div>
    )
  }
});
