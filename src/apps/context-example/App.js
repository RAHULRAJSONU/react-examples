import React from 'react';
import './App.css';
import logo from '../../logo.svg';
import LoginForm from './LoginForm';
import {Provider, Consumer } from './Provider';

class App extends React.Component {
  
  render(){
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Consumer>
              {({state: {viewer} }) => (
                <h1 className="App-title">{viewer ? `Welcome ${viewer}!` : 'Log in Yo'}</h1>
              )}
            </Consumer>
          </header>
          <div className="App-intro">
            <LoginForm />
          </div>
        </div>
      </Provider>
    )
  }
}
export default App;
