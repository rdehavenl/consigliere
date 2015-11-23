var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  getInitialState: function(){
    return {accountName:'',accountNumber:'',roleArn:'',accessKey:'',accessSecret:''}
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.setState({name:'',accountNumber:''});
  },
  handleNameChange: function(e){
    this.setState({name:e.target.value});
  },
  handleNumberChange: function(e){
    this.setState({accountNumber:e.target.value});
  },
  render: function(){
    return (
      <div className='container'>
        <form>
          <div className="form-group">
            <label htmlFor="accountNameInput">Account Name</label>
            <input type="text" className="form-control" id="accountNameInput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="accountNumberInput">Account Number</label>
            <input type="text" className="form-control" id="accountNumberInput" placeholder="Number" />
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <input name='choice' type="radio" />
              </span>
              <input type="text" className="form-control" placeholder='Role ARN'/>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <input name='choice' type="radio" />
              </span>
              <input type="text" className="form-control" placeholder='Access Key'/>
              <input type='password' className='form-control' placeholder='Secret'/>
            </div>
          </div>
          <button type="submit" className="btn btn-default">Add Account</button>
        </form>
      </div>
    )
  }
});
