import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import SpaceAppBar from './AppBar';

const LoginComponent = () => (
  <div>
    <SpaceAppBar/>
    <div style={{ margin: '100px' }}>
      <TextField hintText="SSN" /><br/>
      <TextField hintText="Password" /> <br/>
      <RaisedButton  style={{ margin: '10px' }} label="LOGIN" />
      <RaisedButton  href="/register" label="REGISTER" />
    </div>
  </div>
);
export default LoginComponent;