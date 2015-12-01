var React = require('react');
var ReactDOM = require('react-dom');


module.exports = React.createClass({
  getInitialState : function(){
    return {notavailableCount:0,okCount:0,warningCount:0,errorCount:0};
  },
  render: function(){
    var displayType;
    switch(this.props.category){
      case 'security':
        displayType='security';
      break;
      case 'costoptimization':
        displayType='costoptimization';
      break;
      case 'performance':
        displayType='performance';
      break;
      case 'faulttolerance':
        displayType='faulttolerance';
      break;
    }
    displayType+=' text-center';
    return (
      <div>
        <div className='text-center'>
          <h3><strong>{this.props.title}</strong></h3>
        </div>
        <div className={displayType}>
        </div>
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
