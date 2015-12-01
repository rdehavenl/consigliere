var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function(){
    return (
      <div className='vcenter'>
        <div className='col-lg-3'>
          <div className='text-center'>
            <h3><strong>Cost Optimization</strong></h3>
          </div>
          <div className='costoptimization text-center'>
          </div>
          <div className='text-center'>
            <h2>
              <span className="label label-default">1</span>&nbsp;
              <span className="label label-success">2</span>&nbsp;
              <span className="label label-warning">3</span>&nbsp;
              <span className="label label-danger">4</span>&nbsp;
            </h2>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='text-center'>
            <h3><strong>Performance</strong></h3>
          </div>
          <div className='performance text-center'>
          </div>
          <div className='text-center'>
            <h2>
              <span className="label label-default">1</span>&nbsp;
              <span className="label label-success">2</span>&nbsp;
              <span className="label label-warning">3</span>&nbsp;
              <span className="label label-danger">4</span>&nbsp;
            </h2>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='text-center'>
            <h3><strong>Security</strong></h3>
          </div>
          <div className='security text-center'>
          </div>
          <div className='text-center'>
            <h2>
              <span className="label label-default">1</span>&nbsp;
              <span className="label label-success">2</span>&nbsp;
              <span className="label label-warning">3</span>&nbsp;
              <span className="label label-danger">4</span>&nbsp;
            </h2>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='text-center'>
            <h3><strong>Fault Tolerance</strong></h3>
          </div>
          <div className='faulttolerance text-center'>
          </div>
          <div className='text-center'>
            <h2>
              <span className="label label-default">1</span>&nbsp;
              <span className="label label-success">2</span>&nbsp;
              <span className="label label-warning">3</span>&nbsp;
              <span className="label label-danger">4</span>&nbsp;
            </h2>
          </div>
        </div>
      </div>
    )
  }
});
