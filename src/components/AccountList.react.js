/** @jsx React.DOM */

var React = require('react');
var Account = require('./Account.react');

module.exports = Loader = React.createClass({
  render: function(){
    var content = this.props.accounts.map(function(account){
      return (
        <Account name={account.name} number={account.number} />
      )
    });
    return (
      <div className="accountList">
        {content}
      </div>
    )
  }
});
