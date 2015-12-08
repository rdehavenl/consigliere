var React = require('react');
var ReactDOM = require('react-dom');
var crypto = require('crypto');
var AccountGroup = require('./AccountGroup.react');

module.exports = React.createClass({
  render: function(){
    var hash;
    var accountGroupContent = this.props.check.checks.map(function(check){
    hash = crypto.createHash('md5').update(check.name+check.accountNumber).digest('hex');
    return (
        <AccountGroup key={hash} hash={hash} check={check} />
      )
    });
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
                <br />
                <br />
                {accountGroupContent}
              </div>
            </div>
          </div>
      </div>
    )

  }
});
