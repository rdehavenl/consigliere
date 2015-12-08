var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  render: function(){
    var statusSpan;
    switch(this.props.check.status){
      case 'ok':
        statusSpan = <span className="pull-right text-right label label-success">Ok</span>
      break;
      case 'warning':
        statusSpan = <span className="pull-right text-right label label-warning">Warning</span>
      break;
      case 'error':
        statusSpan = <span className="pull-right text-right label label-danger">Error</span>
      break;
      case 'not_available':
        statusSpan = <span className="pull-right text-right label label-default">Not Available</span>
      break;
    }
    var accordionId = 'accountgroup_accordion' + this.props.hash;
    var collapseId = 'accountgroup_collapse' + this.props.hash;
    var hashAccordionId = '#' + accordionId;
    var hashCollapseId = '#' + collapseId;
    return (
      <div className="panel-group" id={accordionId}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a role="button" data-toggle="collapse" data-parent={hashAccordionId} href={hashCollapseId}>
                {this.props.check.accountName}
                {statusSpan}
              </a>
            </h4>
          </div>
          <div id={collapseId} className="panel-collapse collapse">
            <div className="panel-body">
              Blah Blah
            </div>
          </div>
        </div>
      </div>
    )
  }
});
