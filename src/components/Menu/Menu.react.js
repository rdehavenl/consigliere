var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img alt="Consigliere" src="images/consigliere_400x147_white.png" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/cost">Cost Optimizing <span className="label label-danger label-as-badge"></span></Link></li>
                <li><Link to="/performance">Performance <span className="label label-danger label-as-badge"></span></Link></li>
                <li><Link to="/security">Security <span className="label label-danger label-as-badge"></span></Link></li>
                <li><Link to="/fault">Fault Tolerance <span className="label label-danger label-as-badge"></span></Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/accounts">Accounts <span className="label label-danger label-as-badge"></span></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});
