var React = require('react');
var ReactDOM = require('react-dom');
var jquery = require('jquery');
var Link = require('react-router').Link;


module.exports = React.createClass({
  getInitialState : function(){
    return {notavailableCount:0,okCount:0,warningCount:0,errorCount:0};
  },
  componentWillUpdate : function(nextProps) {
    if(nextProps.category !== this.props.category){
      this.fetchData();
      return true;
    }
  },
  fetchData : function () {
    var not_available = 0;
    var ok = 0;
    var warning = 0;
    var error = 0;
    jquery.get('api/accounts/statuscounts',function(accounts){
      accounts.forEach(function(account){
        not_available += account.counts[this.props.category].not_available;
        ok += account.counts[this.props.category].ok;
        warning += account.counts[this.props.category].warning;
        error += account.counts[this.props.category].error;
      }.bind(this));
      this.setState({notavailableCount:not_available,okCount:ok,warningCount:warning,errorCount:error});
    }.bind(this));
  },
  componentDidMount: function() {
    this.fetchData();
  },
  render: function(){
    // choose the right category image
    var displayType = this.props.category + ' text-center';
    var link = "category/"+this.props.category;
    return (
      <div>
        <div className='text-center'>
          <h3><strong>{this.props.title}</strong></h3>
        </div>
        <Link to={link}><div className={displayType}>
        </div></Link>
        <div className='text-center'>
          <h2>
            <span className="label label-default">{this.state.notavailableCount}</span>&nbsp;
            <span className="label label-success">{this.state.okCount}</span>&nbsp;
            <span className="label label-warning">{this.state.warningCount}</span>&nbsp;
            <span className="label label-danger">{this.state.errorCount}</span>&nbsp;
          </h2>
        </div>
      </div>
    )
  }
});
