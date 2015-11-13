
var React = require('react');
var ReactDOM = require('react-dom');
var AccountsPage = require('../components/AccountsPage.react');

var accountsList = [
  {name:'Account-A',number:'123456'},
  {name:'Account-B',number:'654321'}
]
// Render the components, picking up where react left off on the server
ReactDOM.render(
  <AccountsPage accounts={accountsList} />,
  document.getElementById('accounts-react')
);
