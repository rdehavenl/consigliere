var React = require('react');
var ReactDOM = require('react-dom');
var config = require('../config/config');

module.exports = React.createClass({
  getDefaultText: function(){
    console.log(this.props.check.name);
    var defText = null;
    var supText = null;
    config.TrustedAdvisor.Checks.forEach(function(check){
      if(check.Name == this.props.check.name){
        defText = check.DefaultText;
        supText = check.SuppressionText;
      }
    }.bind(this));

    if(defText != null){
      if(typeof this.props.check.resourcesSummary != 'undefined'){
        defText = defText.replace("%X",this.props.check.resourcesSummary.resourcesFlagged);
        defText = defText.replace("%Y",this.props.check.resourcesSummary.resourcesProcessed);
        supText = supText.replace("%X",this.props.check.resourcesSummary.resourcesSuppressed);
        if(this.props.check.resourcesSummary.resourcesSuppressed > 0)
          return defText+' '+supText;
        else
          return defText;
      }
      else {
        return "N/A";
      }

    }
    else {
      return "N/A";
    }
  },
  render: function(){
    var defaultText = this.getDefaultText();
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
                {defaultText}
            </div>
          </div>
        </div>
      </div>
    )
  }
});
