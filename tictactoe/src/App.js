import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currPlayer: true
    }
    this.changePlayer = this.changePlayer.bind(this);
  }

  changePlayer(e) {
    e.preventDefault()
    console.log(this.state.currPlayer)
    let currVal = this.state.currPlayer
    this.setState({
      currPlayer: !currVal
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Square changer={this.changePlayer}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
