import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import {Link } from 'react-router'
// import Route from './router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to={{pathname:'/login'}} >login</Link>
        </header>
        
      </div>
    );
  }
}

export default App;
