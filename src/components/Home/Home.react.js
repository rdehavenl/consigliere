var React = require('react');
var ReactDOM = require('react-dom');
var CategorySummary = require('../commons/CategorySummary.react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className='vcenter'>
        <div className='col-lg-3'>
          <CategorySummary category='cost_optimizing' title='Cost Optimization' />
        </div>
        <div className='col-lg-3'>
          <CategorySummary category='performance' title='Performance' />
        </div>
        <div className='col-lg-3'>
          <CategorySummary category='security' title='Security' />
        </div>
        <div className='col-lg-3'>
          <CategorySummary category='fault_tolerance' title='Fault Tolerance' />
        </div>
      </div>
    )
  }
});
