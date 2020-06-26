import React, {Component} from 'react';
import axios from 'axios';

class Character extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characterList: [],
            hasLoaded: false
        }
    }

    componentDidMount() {
        axios.get('/api/class-list')
        .then(res => {
          this.setState({characterList: res.data, hasLoaded: true})
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