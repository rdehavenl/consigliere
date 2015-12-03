
var React = require('react');
var ReactDOM = require('react-dom');

var App = require('../components/App.react');
var Accounts = require('../components/Accounts/AccountsPage.react');
var Home = require('../components/Home/Home.react');
var Category = require('../components/Category/Category.react');

var Router = require('react-router').Router
var Route = require('react-router').Route
var IndexRoute = require('react-router').IndexRoute

// Render the components, picking up where react left off on the server
ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="accounts" component={Accounts} />
      <Route path="category/:category" component={Category} />
    </Route>
  </Router>,
  document.getElementById('app-react')
);
