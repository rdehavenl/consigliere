var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
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
