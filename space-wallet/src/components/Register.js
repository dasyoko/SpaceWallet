import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SpaceAppBar from './AppBar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import '../App.css';


const style = {
  marginLeft: 20,
  marginRight: 20,
};

class RegisterComponent extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: '', value: "person"}
  }

  handleChange = (event, index, value) => this.setState({value});
  usernameTextChange(e) {
    this.setState({username: e.target.value})
  }
  passwordTextChange(e) {
    this.setState({password: e.target.value})
  }

  register() {
    var request = require("request");

    var options = { method: 'POST',
      url: 'http://172.46.2.78:3000/register/',
      headers: 
      { 'Content-Type': 'application/json' },
      body: { username: this.state.username, password: this.state.password, type: this.state.value},
      json: true };

      request(options, function (error, response, body) {
        if(response.statusCode === 409) {
          alert("User is already registered")
        } else if (response.statusCode !== 200) {
          alert("Please fill out all information")
        }
        else {
          window.location = '/login'
        }
      });
  }

  render() {
    return (<div>
      <SpaceAppBar/>
      <Paper className="registerComp" zDepth={1}>
        <TextField hintText="First name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Middle name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Email address" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="SSN" onChange={this.usernameTextChange.bind(this)} style={style} underlineShow={false} />
        <Divider />
        <TextField type="password" onChange={this.passwordTextChange.bind(this)} hintText="Password" style={style} underlineShow={false} />
        <Divider />
        <TextField type="password" hintText="Confirm Password" style={style} underlineShow={false} />
        <Divider />
         <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value="person" primaryText="Person" />
          <MenuItem value="education" primaryText="Education" />
          <MenuItem value="grocery" primaryText="Retail: Grocery" />
          <MenuItem value="retail" primaryText="Retail: Other" />
          <MenuItem value="restaurant" primaryText="Restaurant" />
          <MenuItem value="employer" primaryText="Employer" />
        </DropDownMenu>
        <Divider/>
      </Paper>
      <RaisedButton onClick={this.register.bind(this)}  className="registerBtn" label="Register"/>
      <RaisedButton href="/" label="Back"/>
    </div>)
  }
}
export default RegisterComponent;