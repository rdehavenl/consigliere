var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var jquery = require('jquery');

module.exports = React.createClass({
  getInitialState : function(){
    return {errorCount : 0}
  },
  componentDidMount: function() {
    var error = 0;
    jquery.get('api/accounts/statuscounts',function(accounts){
      accounts.forEach(function(account){
        error += account.counts[this.props.category].error;
      }.bind(this));
      this.setState({errorCount:error});
    }.bind(this));
  },
  render: function() {
    var displayType
    if(this.state.errorCount <= 0) {
      displayType = 'none';
    }
    else {
      displayType = 'initial';
    }
    return (
      <li>
        <Link to={this.props.category}>{this.props.title}&nbsp;
        <span style={{display: displayType}} className="label label-danger label-as-badge">
          {this.state.errorCount}
        </span>
        </Link>
      </li>
    )
  }
});
