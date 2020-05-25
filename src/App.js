import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import {Provider, Consumer } from './context/Provider';

class App extends React.Component {
  
  render(){
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
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
