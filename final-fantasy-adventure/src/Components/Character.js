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
        if (firstUpdate) {
            axios.get('/api/class-list')
            .then(res => {
                this.setState({characterList: res.data, maxHealth: res.data[0].health, hasLoaded: true})
            })
            .catch(err => console.log(err))
        }
        else {
            axios.get('/api/class-list')
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

    render() {
        return (
            <div>
                {this.state.hasLoaded
                    ? (
                        <ManageCharacter 
                            character={this.state.characterList} 
                            maxHealth={this.state.maxHealth} 
                            dealDamageFn={this.props.dealDamageFn} />                             
                    )
                    : null
                }                
            </div>
        )
    }
}

export default Character