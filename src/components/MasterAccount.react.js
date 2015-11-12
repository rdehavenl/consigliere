/** @jsx React.DOM */

var React = require('react');

module.exports = Loader = React.createClass({
  render: function(){
    return (
      <div className="masterAccount">
        <div className="accountName">
          {this.props.name}
        </div>
        <div className="accountKey">
          {this.props.accessKey}
        </div>
      </div>
    )
  }
});
