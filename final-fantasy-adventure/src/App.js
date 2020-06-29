import React, { Component } from 'react';
// import axios from 'axios';
import Enemies from './Components/Enemies';
import Character from './Components/Character';
import Header from './Components/Header';
import HandleDamage from './Components/HandleDamage';
import createCharacter from './Components/CreateCharacter';
import './reset.css';
import './App.css';
import CreateCharacter from './Components/CreateCharacter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerAbilityDamage: 0,
      enemyAbilityDamage: 0,
      newPlayerHealth: 0,
      newEnemyHealth: 0,
      turnEnded: false,
      turnDisabled: true,
      currentMonster: [],
      createCharacter: true      
    }
  }

  addCurrentMonster = (monster) => {
    this.setState({currentMonster: monster});
  }

  resetDamage = () => {
    this.setState({playerAbilityDamage: 0});
  }

  playerDealDamage = (abilityDamage) => {
    this.setState({playerAbilityDamage: abilityDamage})
    this.updateTurnButton(false);    
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

  updatedTurns = () => {
    this.setState({turnEnded: !this.state.turnEnded});
  }

  updateTurnButton = (val) => {
    this.setState({turnDisabled: val})
  }

  render() {
    // console.log(this.state.damage);
    // console.log(this.state.enemyAbilityDamage);
    // console.log(this.state.playerAbilityDamage); 
    // console.log(this.state.currentMonster);
    return (
      <div className="App">
        <section className='game-window'>
          {this.state.createCharacter 
          ? (
              <div className='game-window'>
                <Header characterCreation={this.state.createCharacter} />
                <CreateCharacter />
              </div>
          )
          : (
              <div className='game-window'>
                <Header characterCreation={this.state.createCharacter}/>
                <section className='encounter-window'>
                  <Enemies               
                    damage={this.state.enemyAbilityDamage}
                    newHealth={this.state.newEnemyHealth}
                    turnEnded={this.state.turnEnded}
                    dealDamageFn={this.enemyDealDamage}
                    isTurnEnded={this.updatedTurns}
                    addMonsterFn={this.addCurrentMonster} 
                    currentMonster={this.state.currentMonster}
                    turnButton={this.state.turnDisabled} />
                </section>
                <HandleDamage 
                  playerAbilityDamage={this.state.playerAbilityDamage}
                  enemyAbilityDamage={this.state.enemyAbilityDamage}
                  updateEnemyHealthFn={this.updateEnemyHealth}
                  updatePlayerHealthFn={this.updatePlayerHealth}
                  resetDamageFn={this.resetDamage}
                  isTurnEnded={this.updatedTurns}
                  turnButton={this.state.turnDisabled}
                  turnButtonFn={this.updateTurnButton} />
                <section className='character-section'>
                  <Character 
                    damage={this.state.playerAbilityDamage}
                    newHealth={this.state.newPlayerHealth} 
                    turnEnded={this.state.turnEnded}
                    dealDamageFn={this.playerDealDamage}
                    isTurnEnded={this.updatedTurns}/>
                </section>
              </div>
            )
          }
                                  
        </section>
      </div>
    );
  }  
}

export default App;
