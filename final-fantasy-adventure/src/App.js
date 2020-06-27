import React, { Component } from 'react';
// import axios from 'axios';
import Enemies from './Components/Enemies';
import Character from './Components/Character';
import Header from './Components/Header';
import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      damage: 0
      
    }
  }

  resetDamage = () => {
    this.setState({damage: 0});
  }

  dealDamage = (abilityDamage) => {
    this.setState({damage: abilityDamage})    
  }

  render() {
    console.log(this.state.damage);
    return (
      <div className="App">
        <section className='game-window'>
          <Header />
          <section className='encounter-window'>
            <Enemies               
              damage={this.state.damage}
              dealDamageFn={this.dealDamage}
              resetDamageFn={this.resetDamage} />
          </section>
          
          <section className='character-section'>
            <Character 
              damage={this.state.damage} 
              dealDamageFn={this.dealDamage}
              resetDamageFn={this.resetDamage} />
          </section>                        
        </section>
      </div>
    );
  }  
}

export default App;
