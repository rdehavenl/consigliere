var React = require('react');
var ReactDOM = require('react-dom');
var jquery = require('jquery');
var Spinner = require('spin');

module.exports = React.createClass({
  getInitialState: function(){
    return {spinningAuthTest:'none',spinningAccountCreation:'none', type:'master', testFailed:'none',testSuccess:'none',accountName:'',accountNumber:'',roleArn:'',accessKey:'',accessSecret:'',choice:'role'}
  },
  handleNameChange: function(e){
    this.setState({testFailed:'none',testSuccess:'none'});
    this.setState({accountName:e.target.value});
  },
  handleNumberChange: function(e){
    this.setState({testFailed:'none',testSuccess:'none'});
    this.setState({accountNumber:e.target.value});
  },
  handleArnChange: function(e){
    this.setState({testFailed:'none',testSuccess:'none'});
    this.setState({roleArn:e.target.value});
  },
  handleAccessKeyChange: function(e){
    this.setState({testFailed:'none',testSuccess:'none'});
    this.setState({accessKey:e.target.value});
  },
  handleAccessSecretChange: function(e){
    this.setState({testFailed:'none',testSuccess:'none'});
    this.setState({accessSecret:e.target.value});
  },
  handleChoiceChange: function(e){
    this.setState({testFailed:'none',testSuccess:'none'});
    switch(e.target.id){
      case 'roleChoice':
        this.setState({choice:'role'});
      break;
      case 'keysChoice':
        this.setState({choice:'keys'});
      break;
    }
  },
  changeChoice: function(e){
    this.setState({testFailed:'none',testSuccess:'none'});
    switch(e.target.id){
      case 'roleArnInput':
        this.setState({choice:'role'});
      break;
      case 'accessKeyInput':
      case 'accessSecretInput':
        this.setState({choice:'keys'});
      break;
    }
  },
  handleAuthTest: function(e){
    var currButton = e.target;
    if(!currButton.disabled){
      currButton.disabled = true;
      this.setState({spinningAuthTest:'initial'});
      jquery.ajax({
        url: 'api/authtest',
        dataType: 'json',
        type: 'POST',
        data: this.state,
        success: function(data){
          this.setState({spinningAuthTest:'none'});
          currButton.disabled = false;
          this.setState({testSuccess:'initial'});
        }.bind(this),
        error: function(xhr, status, err) {
          this.setState({spinningAuthTest:'none'});
          currButton.disabled = false;
          this.setState({testFailed:'initial'});
          console.error(err.toString());
        }.bind(this)
      });
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var currButton = e.target;
    if(!currButton.disabled){
      currButton.disabled = true;
      this.setState({testFailed:'none',testSuccess:'none'});
      this.props.onMasterSubmit(this.state);
    }
  },
  render: function(){
    return (
        <div style={{display: this.props.display}}>
        <div className='container'>
        <h3>Add a master account</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="accountNameInput">Account Name</label>
              <input type="text" className="form-control" id="accountNameInput" placeholder="Name" value={this.state.accountName} onChange={this.handleNameChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="accountNumberInput">Account Number</label>
              <input type="text" className="form-control" id="accountNumberInput" placeholder="Number" value={this.state.accountNumber} onChange={this.handleNumberChange}/>
            </div>
            <div className="form-group">
            <div className="radio">
                { function(){
                  if(this.state.choice=='role') {
                    return <label><input id='roleChoice' name='choice' type="radio" checked='true' onChange={this.handleChoiceChange}/>Use IAM role of local server</label>
                  }
                  else {
                    return <label><input id='roleChoice' name='choice' type="radio" onChange={this.handleChoiceChange}/>Use IAM role of local server</label>
                  }
                }.call(this)}
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  { function(){
                    if(this.state.choice=='keys') {
                      return <input id='keysChoice' name='choice' type="radio" checked='true' onChange={this.handleChoiceChange}/>
                    }
                    else {
                      return <input id='keysChoice' name='choice' type="radio" onChange={this.handleChoiceChange}/>
                    }
                  }.call(this)}
                </span>
                <input id='accessKeyInput' type="text" className="form-control" placeholder='Access Key' value={this.state.accessKey} onFocus={this.changeChoice} onChange={this.handleAccessKeyChange}/>
                <input id='accessSecretInput' type='password' className='form-control' placeholder='Secret' value={this.state.accessSecret} onFocus={this.changeChoice} onChange={this.handleAccessSecretChange}/>
              </div>
            </div>
            <button type="submit" className="btn btn-default">
              <span style={{display: this.state.spinningAccountCreation}} ><span className="glyphicon glyphicon-refresh spinning"></span>&nbsp;</span>
              Add Account
            </button>&nbsp;
            <button onClick={this.handleAuthTest} type='button' className='btn btn-default'>
            <span style={{display: this.state.spinningAuthTest}} ><span className="glyphicon glyphicon-refresh spinning"></span>&nbsp;</span>
              Authentication Test
            </button>&nbsp;
            <span style={{display: this.state.testSuccess}} className="testSuccess">Test Successful <span className="glyphicon glyphicon-ok"></span></span>
            <span style={{display: this.state.testFailed}} className="testFailed">Test Failed <span className="glyphicon glyphicon-alert"></span></span>
          </form>
        </div>
        </div>
    )
  }
});
