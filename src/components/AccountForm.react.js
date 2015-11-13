var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="accountForm">
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Number' />
      </div>
    )
  }
});
