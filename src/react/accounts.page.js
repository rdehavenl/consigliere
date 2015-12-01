
var React = require('react');
var ReactDOM = require('react-dom');
var AccountsPage = require('../components/Accounts/AccountsPage.react');

// Render the components, picking up where react left off on the server
ReactDOM.render(
  <AccountsPage />,
  document.getElementById('accounts-react')
);
