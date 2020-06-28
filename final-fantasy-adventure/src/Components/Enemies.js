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
            index: 0
        }
    }

    getMonsterInfo = () => {
        axios.get(`/api/encounter/${this.state.index}`)
        .then(res => {
            // console.log('response: ' + res)
            this.setState({monster: res.data, maxHealth: res.data.health, hasLoaded: true})
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        if (this.state.hasLoaded === false) {
            this.getMonsterInfo();
        }
        else {

        }      
    }

    componentDidUpdate() {
        if (this.props.damage === 0) {
            console.log('component did update: ' + this.state.monster.abilities[0].damage)
            this.props.dealDamageFn(this.state.monster.abilities[0].damage)
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

    render() {
        // console.log(this.state.myTurn);
        // console.log(this.state.monster);
        // console.log(this.props.monsterIndex);
        return (
            <div>                
                {this.state.hasLoaded
                ? (
                    <div className='enemy-box'>
                        {/* <img className='enemy-image' src={this.state.monster.img} alt={this.state.monster.name} />
                        <p>Health:</p>
                        <p>{this.state.monster.health}/{this.state.maxHealth} </p> */}
                        <DisplayEnemies monster={this.state.monster} maxHealth={this.state.maxHealth} />                                                                  
                    </div>
                )
                : null
                }   
                <button onClick={this.cycleThroughEnemies} >Cycle Through</button>   
            </div>
        )
    }
}

export default Enemies;