var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function(){
    var displayType;
    if(this.props.account.type == 'master')
      displayType = 'panel panel-primary';
    else
      displayType = 'panel panel-default';

    return (
      <div className='container'>
        <div className={displayType}>
        <div className="panel-heading"><strong>{this.props.account.accountName}</strong> <small>{this.props.account.accountNumber}</small></div>
          <div className="panel-body">
          { function(){
            if(this.props.account.choice=='role') {
              if(this.props.account.type == 'master') {
                return <div>Using local instance role</div>
              }
              else {
                return <div>{this.props.account.roleArn}</div>
              }
            }
            else {
              return <div>{this.props.account.accessKey}</div>
            }
          }.call(this)}
          </div>
        </div>
      </div>
    )
  }
});
