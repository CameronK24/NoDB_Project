import React, {Component} from 'react';
import DisplayEnemies from './DisplayEnemies'
import axios from 'axios';

class Enemies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monster: [],
            maxHealth: 0,
            hasLoaded: false,
            index: 0,
            callCount: 1
        }
    }

    updateEnemyDamage = () => {
        if (this.props.damage === 0) {
            // console.log('component did update: ' + this.state.monster.abilities[0].damage)
            this.props.dealDamageFn(this.state.monster.abilities[0].damage)
        }
    }

    getMonsterInfo = (firstUpdate) => {
        if (firstUpdate === true) {
            axios.get(`/api/encounter/${this.state.index}`)
            .then(res => {
                // console.log('response: ' + res)
                this.setState({monster: res.data, maxHealth: res.data.health, hasLoaded: true})
                this.props.addMonsterFn(this.state.monster);
                this.props.dealDamageFn(this.state.monster.abilities[0].damage)
            })
            .catch(err => console.log(err))
        }
        else {
            axios.get(`/api/encounter/${this.state.index}`)
            .then(res => {
                // console.log('response: ' + res)
                this.setState({monster: res.data})
                this.props.addMonsterFn(this.state.monster);
            })
            .catch(err => console.log(err))            
            this.props.isTurnEnded();
        }
        
    }

    componentDidMount() {
        if (this.state.hasLoaded === false) {
            this.getMonsterInfo(true);
        }  
    }

    cycleThroughEnemies = () => {
        if (this.state.index === 10) {
            this.setState({index: 0});
        }
        else {
            axios.get(`/api/encounter/${this.state.index}`)
            .then(res => {
                this.setState({monster: res.data, maxHealth: res.data.health, index: ++this.state.index})
            })
            .catch(err => console.log(err))      
        }    
    }

    nextEnemy = () => {
        console.log('next enemy please');
        axios.delete('/api/remove-enemy/0')
        .then(res => {
            this.getMonsterInfo(true);
        })
        .catch(err => console.log(err))
    }

    checkTurn = () => {
        console.log('am i infinite?');
        if (this.state.monster.health > 0) {
            if (this.props.turnEnded === true) {
                this.getMonsterInfo();
            }
        }
        else if (this.state.monster.health <= 0) {
            if (this.props.turnEnded === false) {
                this.nextEnemy();
            }       
        }
    }

    render() {
        // console.log(this.state.myTurn);
        // console.log(this.state.monster);
        // console.log(this.props.monsterIndex);
        // this.checkTurn()
        
        return (
            <div>                
                {this.state.hasLoaded
                ? (
                    <div className='enemy-box'>
                        {/* <img className='enemy-image' src={this.state.monster.img} alt={this.state.monster.name} />
                        <p>Health:</p>
                        <p>{this.state.monster.health}/{this.state.maxHealth} </p> */}   
                        {/* {this.updateEnemyDamage}                   */}
                        <DisplayEnemies monster={this.state.monster} maxHealth={this.state.maxHealth} />                                                                  
                    </div>
                )
                : null
                }   
                {/* <button onClick={this.cycleThroughEnemies} >Cycle Through</button> */}
                <button onClick={this.checkTurn}>Update Enemy</button>   
            </div>
        )
    }
}

export default Enemies;