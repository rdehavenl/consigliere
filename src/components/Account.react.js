var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  handleRemove : function(e){
    this.props.onDelete(this.props.account);
  },
  render: function(){
    var displayType;
    if(this.props.account.type == 'master')
      displayType = 'panel panel-primary';
    else
      displayType = 'panel panel-default';

    return (
      <div className='container'>
        <div className={displayType}>
        <div className="panel-heading">
          <strong>{this.props.account.accountName}</strong>
          &nbsp;&nbsp;<small>{this.props.account.accountNumber}</small>
          { function(){
            if(this.props.account.type != 'master') {
              return (
                <span>
                  <a><span onClick={this.handleRemove} className="pull-right text-right glyphicon glyphicon-remove"></span></a>
                </span>
              )
            }
          }.call(this)}
        </div>
          <div className="panel-body">
          { function(){
            if(this.props.account.choice=='role') {
              if(this.props.account.type == 'master') {
                return <div><em>Using local instance role</em></div>
              }
              else {
                return <div><small>Role</small>&nbsp;<strong>{this.props.account.roleArn}</strong></div>
              }
            }
            else {
              return <div><small>Access Key</small>&nbsp;<strong>{this.props.account.accessKey}</strong></div>
            }
          }.call(this)}
          </div>
        </div>
      </div>
    )
  }
});
