import React, {Component} from 'react';
import axios from 'axios';

class Enemies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monster: [],
            maxHealth: 0,
            hasLoaded: false,
            myTurn: false,
            index: 0
        }
    }

    componentDidMount() {
        if (this.state.hasLoaded === false) {
            axios.get(`/api/encounter/${this.state.index}`)
            .then(res => {
                // console.log('response: ' + res)
                this.setState({monster: res.data, maxHealth: res.data.health, hasLoaded: true})
            })
            .catch(err => console.log(err))
        }
        else {

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

    handleTurn = () => {
        console.log('enemy turn');
        if (this.state.myTurn === false && this.props.damage !== 0) {
            let body = {damage: this.props.damage}
            axios.put(`/api/damage/${this.state.index}&enemy`, body)
            .then(res => {
                console.log(res.data);
                this.setState({monster: res.data, myTurn: true})
                this.props.resetDamageFn();
            })
            .catch(err => console.log(err));       
        }
        else if (this.state.myTurn === true && this.props.damage === 0) {
            let damageToDeal = this.state.monster.abilities[this.state.index].damage;
            this.props.dealDamageFn(damageToDeal);
            this.setState({myTurn: false});
        }
    }

    render() {
        console.log(this.state.myTurn);
        console.log(this.state.monster);
        // console.log(this.props.monsterIndex);
        return (
            <div>                
                {this.state.hasLoaded
                ? (
                    <div className='enemy-box'>
                        <img className='enemy-image' src={this.state.monster.img} alt={this.state.monster.name} />
                        <p>Health:</p>
                        <p>{this.state.monster.health}/{this.state.maxHealth} </p>
                        <button onClick={this.cycleThroughEnemies} >Cycle Through</button>
                        {this.handleTurn}
                    </div>
                )
                : null
                }    
            </div>
        )
    }
}

export default Enemies;