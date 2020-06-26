import React, { Component } from 'react';
// import axios from 'axios';
import Enemies from './Components/Enemies';
import Character from './Components/Character';
import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      damage: 0
    }
  }

  

  render() {
    return (
      <div className="App">
        <section className='game-window'>
          <h1>SET SAIL FOR ADVENTURE!</h1>
          <section className='encounter-window'>
            <Enemies />
          </section>
          <section className='character-section'>
            <Character />
          </section>                        
        </section>
      </div>
    );
  }  
}

export default App;
