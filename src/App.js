import React, { Component } from 'react';
import './App.css';
import octocat from './Octocat.png'
import Search from './Components';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={octocat} alt="Mascote do github"></img>
        </div>
        <Search></Search>
      </div>
    );
  }
}

export default App;
