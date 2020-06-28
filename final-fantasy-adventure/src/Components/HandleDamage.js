import React, {Component} from 'react';
import axios from 'axios';

class HandleDamage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerDamage: 0,
            enemyDamage: 0
        }
    }

    dealDamage = () => {
        let playerRandDamage = Math.ceil(Math.random() * this.props.playerAbilityDamage);
        let enemyRandDamage = Math.ceil(Math.random() * this.props.enemyAbilityDamage); 
        this.playerTakesDamage(enemyRandDamage);
        this.enemyTakesDamage(playerRandDamage);    
        this.props.isTurnEnded();
        this.props.turnButtonFn(true);
        this.props.resetDamageFn();      
    }

    playerTakesDamage = (damageToTake) => {
        let body = {damage: damageToTake}
        // console.log(body);
        axios.put(`/api/damage/0&character`, body)
        .then(res => {
            // console.log(res.data.health);
            this.props.updatePlayerHealthFn(res.data.health);
        })
        .catch(err => console.log(err));
    }

    enemyTakesDamage = (damageToTake) => {
        let body = {damage: damageToTake}
        // console.log(body);
        axios.put(`/api/damage/0&enemy`, body)
        .then(res => {
            // console.log(res.data.health);
            this.props.updateEnemyHealthFn(res.data.health);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='handle-damage'>
                {this.props.turnButton 
                ? (
                    <button onClick={this.dealDamage} disabled >End Turn</button>
                )
                : (
                    <button onClick={this.dealDamage} >End Turn</button>
                )
                }
                
            </div>
        )
    }
}

export default HandleDamage;