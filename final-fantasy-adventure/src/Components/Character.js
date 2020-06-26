import React, {Component} from 'react';
import axios from 'axios';

class Character extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characterList: [],
            maxHealth: 0,
            hasLoaded: false
        }
    }

    componentDidMount() {
        axios.get('/api/class-list')
        .then(res => {
          this.setState({characterList: res.data, maxHealth: res.data[0].health, hasLoaded: true})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.hasLoaded
                    ? (
                        <div className='character'>
                            <div className='character-info'>
                                <h2>{this.state.characterList[0].name}</h2>
                                <section className='character-stats'>
                                    <ul>
                                        <li>Strength: 20</li>
                                        <li>Intellect: 13</li>
                                        <li>Speed: 10</li>
                                    </ul>
                                    <span>
                                        <p>Health:</p> 
                                        <p>{this.state.characterList[0].health}/{this.state.maxHealth}</p>
                                    </span>
                                </section>
                                <section className='character-abilities'>
                                    <img src={this.state.characterList[0].abilities[0].img} alt={this.state.characterList[0].abilities[0].name} />
                                    <img src={this.state.characterList[0].abilities[1].img} alt={this.state.characterList[0].abilities[1].name} />
                                    <img src={this.state.characterList[0].abilities[2].img} alt={this.state.characterList[0].abilities[2].name} />
                                </section>
                            </div> 
                            <img className='character-image' src={this.state.characterList[0].img} alt={this.state.characterList[0].name} />                       
                        </div>                               
                    )
                    : null
                }                
            </div>
        )
    }
}

export default Character