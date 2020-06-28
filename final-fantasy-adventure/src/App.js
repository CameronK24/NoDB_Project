import React, { Component } from 'react';
// import axios from 'axios';
import Enemies from './Components/Enemies';
import Character from './Components/Character';
import Header from './Components/Header';
import HandleDamage from './Components/HandleDamage';
import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerAbilityDamage: 0,
      enemyAbilityDamage: 0,
      newPlayerHealth: 0,
      newEnemyHealth: 0      
    }
  }

  resetDamage = () => {
    this.setState({playerAbilityDamage: 0, enemyAbilityDamage: 0});
  }

  playerDealDamage = (abilityDamage) => {
    this.setState({playerAbilityDamage: abilityDamage})    
  }

  enemyDealDamage = (abilityDamage) => {
    this.setState({enemyAbilityDamage: abilityDamage})  
  }

  updateEnemyHealth = (value) => {
    this.setState({newEnemyHealth: value});
  }

  updatePlayerHealth = (value) => {
    this.setState({newPlayerHealth: value});
  }

  render() {
    // console.log(this.state.damage);
    // console.log(this.state.enemyAbilityDamage);
    // console.log(this.state.playerAbilityDamage); 
    return (
      <div className="App">
        <section className='game-window'>
          <Header />
          <section className='encounter-window'>
            <Enemies               
              damage={this.state.enemyAbilityDamage}
              newHealth={this.state.newEnemyHealth}
              dealDamageFn={this.enemyDealDamage} />
          </section>
          <HandleDamage 
            playerAbilityDamage={this.state.playerAbilityDamage}
            enemyAbilityDamage={this.state.enemyAbilityDamage}
            updateEnemyHealthFn={this.updateEnemyHealth}
            updatePlayerHealthFn={this.updatePlayerHealth}
            resetDamageFn={this.resetDamage} />
          <section className='character-section'>
            <Character 
              damage={this.state.playerAbilityDamage}
              newHealth={this.state.newPlayerHealth} 
              dealDamageFn={this.playerDealDamage} />
          </section>                        
        </section>
      </div>
    );
  }  
}

export default App;
