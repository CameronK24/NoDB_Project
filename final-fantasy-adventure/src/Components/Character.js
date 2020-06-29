import React, {Component} from 'react';
import ManageCharacter from './ManageCharacter';
import axios from 'axios';

class Character extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characterList: [],
            maxHealth: 0,
            hasLoaded: false,
        }
    }

    getCharacterInfo = (firstUpdate) => {
        if (firstUpdate === true) {
            axios.get('/api/character')
            .then(res => {
                this.setState({characterList: res.data, maxHealth: res.data.health, hasLoaded: true})
            })
            .catch(err => console.log(err))
        }
        else {
            axios.get('/api/character')
            .then(res => {
                this.setState({characterList: res.data})
            })
            .catch(err => console.log(err))
        }
        
    }

    componentDidMount() {
        if (this.state.hasLoaded === false) {
            this.getCharacterInfo(true);
        }
        else {

        }        
    }

    checkTurn = () => {
        if (this.props.turnEnded === true) {
            this.getCharacterInfo();
        }
    }

    heal = () => {
        let body = {damage: 20}
        axios.put('/api/damage/0&heal', body)
        .then(res => {
            this.setState({characterList: res.data});
        })
        .catch(err => console.log(err));
    }

    render() {
        this.checkTurn();
        return (
            <div>
                {this.state.hasLoaded
                    ? (
                        <ManageCharacter 
                            character={this.state.characterList} 
                            maxHealth={this.state.maxHealth} 
                            dealDamageFn={this.props.dealDamageFn} 
                            healDamageFn={this.heal}/>                             
                    )
                    : null
                }                
            </div>
        )
    }
}

export default Character