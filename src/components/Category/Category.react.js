var React = require('react');
var ReactDOM = require('react-dom');
var CategorySummary = require('../commons/CategorySummary.react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className='vcenter'>
        <div className='col-lg-4'>
        </div>
        <div className='col-lg-4'>
          <CategorySummary category='performance' title='Performance' />
        </div>
        <div className='col-lg-4'>
        </div>
      </div>
    )
  }
});
