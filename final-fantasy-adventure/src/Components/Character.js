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
            myTurn: true
        }
    }

    componentDidMount() {
        if (this.state.hasLoaded === false) {
            axios.get('/api/class-list')
            .then(res => {
                this.setState({characterList: res.data, maxHealth: res.data[0].health, hasLoaded: true})
            })
            .catch(err => console.log(err))
        }
        else {

        }        
    }

    handleTurn = (damageToDeal) => {
        console.log('player turn');
        if (this.state.myTurn === true) {
            this.props.dealDamageFn(damageToDeal);
            this.setState({myTurn: false})
        }
        else if (this.state.myTurn === false && this.props.damage !== 0) {
            let body = {damage: this.props.damage}
            axios.put(`/api/damage/0&character`, body)
            .then(res => {
                console.log(res.data);
                this.setState({characterList: res.data, myTurn: true})
                this.props.resetDamageFn();
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                {this.state.hasLoaded
                    ? (
                        <ManageCharacter 
                            character={this.state.characterList} 
                            maxHealth={this.state.maxHealth} 
                            handleTurnFn={this.handleTurn}
                            myTurn={this.state.myTurn} />                             
                    )
                    : null
                }                
            </div>
        )
    }
}

export default Character