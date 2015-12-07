var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function(){
    return (
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {this.props.check.name}
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                {this.props.check.description}
              </div>
            </div>
          </div>
      </div>
    )

  }
});
