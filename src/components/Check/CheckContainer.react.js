var React = require('react');
var ReactDOM = require('react-dom');
var crypto = require('crypto');



var Check = require('./Check.react');

module.exports = React.createClass({

  render: function(){
    var hash;
    console.log(this.props.checks);
    var content = this.props.checks.map(function(check){
    hash = crypto.createHash('md5').update(check.name).digest('hex');
      return (
          <Check key={hash} check={check} />
        )
    });
    return (
      <div>
        {content}
      </div>

    )
  }
});
