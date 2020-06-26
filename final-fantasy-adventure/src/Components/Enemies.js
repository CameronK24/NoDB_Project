import React, {Component} from 'react';
import axios from 'axios';

class Enemies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monsterList: [],
            hasLoaded: false
        }
    }

    componentDidMount() {
        axios.get('/api/encounter-list')
        .then(res => {
          this.setState({monsterList: res.data, hasLoaded: true})
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.monsterList);
        return (
            <div>                
                {this.state.hasLoaded
                ? (
                    <div className='enemy-box'>
                        <img className='enemy-image' src={this.state.monsterList[0].img} alt={this.state.monsterList[0].name} />
                    </div>
                )
                : null
                }    
            </div>
        )
    }
}

export default Enemies;