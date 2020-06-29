import React, { Component } from 'react';
import axios from 'axios';

class CreateCharacter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classlist: [],
            characterName: '',
            hasLoaded: false
        }
    }

    componentDidMount() {
        axios.get('/api/class-list')
        .then(res => {
            this.setState({classlist: res.data, hasLoaded: true});  
        })
        .catch(err => console.log(err))
    }

    handleInput = (val) => {
        this.setState({characterName: val})
    }

    handleCreate = () => {
        const newCharacter = {
            name: this.state.characterName,
            img: this.state.classlist[0].img,
            health: this.state.classlist[0].health,
            abilities: this.state.classlist[0].abilities
        }

        console.log(newCharacter);
        axios.post('/api/create-character', {newCharacter})
        .then(res => {
            alert(`${this.state.characterName} has been created!`);
            this.props.hasCreated();
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.characterName);
        return (
            <div>
                {this.state.hasLoaded
                ? (
                    <section className='character-creator'>
                        <h3>Character Creator</h3>
                        <section className='create-image-name'>
                            <img src={this.state.classlist[0].img} alt='class image' />
                            <div>
                                <input placeholder='Character Name' 
                                    value={this.state.characterName}
                                    onChange={e => this.handleInput(e.target.value)} />
                                <button onClick={this.handleCreate} >Finalize Creation</button>
                            </div>                            
                        </section>
                        <section className='stats-and-abilities'>
                            <div className='stats-box'>
                                <ul><h2>Stats</h2>
                                    <li>Health: {this.state.classlist[0].health} </li>
                                    <li>Strength: 20</li>
                                    <li>Intellect: 13</li>
                                    <li>Speed: 10</li>
                                </ul>
                            </div>
                            <div className='ability-box'>
                                <ul>
                                    <li><img src={this.state.classlist[0].abilities[0].img} alt={this.state.classlist[0].abilities[0].name} /></li>
                                    <li>{this.state.classlist[0].abilities[0].name}, Max Damage: {this.state.classlist[0].abilities[0].damage}</li>
                                    <li><img src={this.state.classlist[0].abilities[1].img} alt={this.state.classlist[0].abilities[1].name} /></li>
                                    <li>{this.state.classlist[0].abilities[1].name}, Max Damage: {this.state.classlist[0].abilities[1].damage} </li>
                                    <li><img src={this.state.classlist[0].abilities[2].img} alt={this.state.classlist[0].abilities[2].name} /></li>
                                    <li>{this.state.classlist[0].abilities[2].name}, Max Damage: {this.state.classlist[0].abilities[2].damage} </li>
                                </ul>
                            </div>
                        </section>
                    </section>
                )
                : null
                }
                
            </div>
        )
    }
}

export default CreateCharacter;