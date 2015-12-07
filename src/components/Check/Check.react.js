var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function(){
    var accordionId = 'accordion' + this.props.hash;
    var collapseId = 'collapse' + this.props.hash;
    var hashAccordionId = '#' + accordionId;
    var hashCollapseId = '#' + collapseId;
    var status = "ok";
    this.props.check.checks.forEach(function(check){
      switch(check.status){
        case 'warning':
          switch(status){
            case 'ok':
            case 'not_available':
              status = check.status;
            break;
          }
        break;
        case 'error':
          switch(status){
            case 'ok':
            case 'warning':
            case 'not_available':
              status = check.status;
            break;
          }
        break;
        case 'not_available':
          switch(status){
            case 'ok':
              status = check.status;
            break;
          }
        break;
      };
    });
    var statusSpan;
    switch(status){
      case 'ok':
        statusSpan = <span className="okStatus pull-right text-right glyphicon glyphicon-ok-sign"></span>
      break;
      case 'warning':
        statusSpan = <span className="warningStatus pull-right text-right glyphicon glyphicon-warning-sign"></span>
      break;
      case 'error':
        statusSpan = <span className="errorStatus pull-right text-right glyphicon glyphicon-remove-sign"></span>
      break;
      case 'not_available':
        statusSpan = <span className="notavailableStatus pull-right text-right glyphicon glyphicon-question-sign"></span>
      break;
    }
    return (
        <div className="panel-group" id={accordionId}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent={hashAccordionId} href={hashCollapseId}>
                  {this.props.check.name}
                  {statusSpan}
                </a>
              </h4>
            </div>
            <div id={collapseId} className="panel-collapse collapse">
              <div className="panel-body">
                <span dangerouslySetInnerHTML={{__html: this.props.check.description}} />
              </div>
            </div>
          </div>
      </div>
    )

  }
});
