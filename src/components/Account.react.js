/** @jsx React.DOM */

var React = require('react');

module.exports = Loader = React.createClass({
  render: function(){
    return (
      <div className="slaveAccount">
        <div className="AccountName">
          {this.props.name}
        </div>
        <div className="AccountNumber">
          {this.props.number}
        </div>
      </div>
    )
  }
});
