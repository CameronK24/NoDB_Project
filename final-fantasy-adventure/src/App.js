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
      damage: 0,
      index: 0
    }
  }

  cycleThroughEnemies = () => {
    if (this.state.index === 9) {
      this.setState({index: 0});
    }
    else {
      this.setState({index: ++this.state.index})
    }    
  }

  render() {
    return (
      <div className="App">
        <section className='game-window'>
          <h1>SET SAIL FOR ADVENTURE!</h1>
          <section className='encounter-window'>
            <Enemies monsterIndex={this.state.index} />
          </section>
          <button onClick={this.cycleThroughEnemies} >Cycle Through</button>
          <section className='character-section'>
            <Character />
          </section>                        
        </section>
      </div>
    );
  }  
}

export default App;
