import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register'
import { Route, Switch } from 'react-router-dom'
import WalletDetails from './components/mainpage/WalletDetails';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <div className="loginForm">
            <MuiThemeProvider>
              <LoginComponent />
            </MuiThemeProvider>
          </div>
        )}/>
        <Route exact path='/register' render={() => (
          <div>
            <MuiThemeProvider>
              <RegisterComponent/>
            </MuiThemeProvider>
          </div>
        )}/> 
        <Route exact path='/main' render={() => (
          <div>
            <MuiThemeProvider>
              <WalletDetails/>
            </MuiThemeProvider>
          </div>
        )}/>
      </Switch>
    );
  }
}

export default App;
