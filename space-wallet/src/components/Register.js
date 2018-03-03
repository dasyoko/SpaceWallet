import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SpaceAppBar from './AppBar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import '../App.css';

const style = {
  marginLeft: 20,
  marginRight: 20,
};

const RegisterComponent = () => (
  <div>
    <SpaceAppBar/>
    <Paper className="registerComp" zDepth={2}>
      <TextField hintText="First name" style={style} underlineShow={false} />
      <Divider />
      <TextField hintText="Middle name" style={style} underlineShow={false} />
      <Divider />
      <TextField hintText="Last name" style={style} underlineShow={false} />
      <Divider />
      <TextField hintText="Email address" style={style} underlineShow={false} />
      <Divider />
      <TextField hintText="SSN" style={style} underlineShow={false} />
      <Divider />
      <TextField type="password" hintText="Password" style={style} underlineShow={false} />
      <Divider />
      <TextField type="password" hintText="Confirm Password" style={style} underlineShow={false} />
      <Divider />
    </Paper>
    <RaisedButton className="registerBtn" label="REGISTER"/>
  </div>
);
export default RegisterComponent;