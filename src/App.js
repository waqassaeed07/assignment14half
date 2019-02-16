import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Plan from "./components/plan"
import Howdoesitwork from "./components/howdoesitwork"
import Marketscoping from "./components/marketscoping"
import  Whereweare from "./components/whereweare"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Plan />
      <Howdoesitwork />
      <Marketscoping />
      <Whereweare />
    
      </div>
    );
  }
}

export default App;
