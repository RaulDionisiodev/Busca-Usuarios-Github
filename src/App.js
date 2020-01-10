import React, { Component } from 'react';
import './App.css';
import octocat from './Octocat.png'
import Search from './Components/Main';
import Routes from './Routes';





class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={octocat} alt="Mascote do github"></img>
        </div>
        <Search></Search>
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
