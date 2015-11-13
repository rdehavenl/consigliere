var React = require('react');
var ReactDOM = require('react-dom');
var Account = require('./Account.react');

module.exports = React.createClass({
  render: function(){
    var content = this.props.accounts.map(function(account){
      return (
        <Account key={account.number} name={account.name} number={account.number} />
      )
    });
    return (
      <div className="accountList">
        {content}
      </div>
    )
  }
});
