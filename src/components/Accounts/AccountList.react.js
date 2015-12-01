var React = require('react');
var ReactDOM = require('react-dom');
var Account = require('./Account.react');

module.exports = React.createClass({
  render: function(){
    var that = this;
    var content = this.props.accounts.map(function(account){
      if(account.type == 'master'){
        return (
          <Account type='master' key={account.accountNumber} account={account} onDelete={that.props.onDelete}/>
        )
      }
      else {
        return (
          <Account type='slave' key={account.accountNumber} account={account} onDelete={that.props.onDelete} />
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
