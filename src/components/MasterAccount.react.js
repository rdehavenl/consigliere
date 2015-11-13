var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
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
