/** @jsx React.DOM */

var React = require('react');

module.exports = Loader = React.createClass({
  render: function(){
    return (
      <div className="accountForm">
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Number' />
      </div>
    )
  }
});
