var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="masterAccount">
        <h1>Master Account (info)</h1>
        <div className="bg-primary accountName">
          {this.props.name}
        </div>
        <div className="bg-primary accountKey">
          {this.props.accessKey}
        </div>
      </div>
    )
  }
});
