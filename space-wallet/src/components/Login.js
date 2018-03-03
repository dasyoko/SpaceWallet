import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import SpaceAppBar from './AppBar';

class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''}
  }
  
  // Create event functions to set the values of the input fields
  usernameTextChange(e) {
    this.setState({username: e.target.value})
  }
  passwordTextChange(e) {
    this.setState({password: e.target.value})
  }
  // Make POST request to back-end
  login() {
    var request = require("request");

    var options = { method: 'POST',
      url: 'http://172.46.2.78:3000/signin/',
      headers: 
      { 'Content-Type': 'application/json' },
      body: { username:  this.state.username, password: this.state.password },
      json: true };

      request(options, function (error, response, body) {
        if(response.statusCode !== 200) {
          alert("Incorrect credentials!")
        }
        else {
          sessionStorage.setItem("jwt", body.token);
          window.location = '/main'
        }
      });

  }
  render() {
    return (
    <div>
    <SpaceAppBar/>
    <div style={{ margin: '100px' }}>
      <center>
        <TextField onChange={this.usernameTextChange.bind(this)} hintText="SSN" /><br/>
        <TextField onChange={this.passwordTextChange.bind(this)}  hintText="Password" /> <br/>
        <RaisedButton onClick={this.login.bind(this)} style={{ margin: '10px' }} label="Login" />
        <RaisedButton href="/register" label="REGISTER" />
      </center>
    </div>
  </div>)}
}
export default LoginComponent;