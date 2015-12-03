var React = require('react');
var ReactDOM = require('react-dom');
var CategorySummary = require('../commons/CategorySummary.react');

module.exports = React.createClass({
  render: function(){
    var title;
    switch(this.props.params.category){
      case 'cost_optimizing':
        title = "Cost Optimization";
      break;
      case 'fault_tolerance':
        title = "Fault Tolerance";
      break;
      case 'performance':
        title = "Performance";
      break;
      case 'security':
        title = "Security";
      break;
    }
    return (
      <div className='vcenter'>
        <div className='col-lg-4'>
        </div>
        <div className='col-lg-4'>
          <CategorySummary category={this.props.params.category} title={title} />
        </div>
        <div className='col-lg-4'>
        </div>
      </div>
    )
  }
});
