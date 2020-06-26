import React, {Component} from 'react';
import axios from 'axios';

class Enemies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monsterList: [],
            maxHealth: 0,
            hasLoaded: false,
        }
    }

    componentDidMount() {
        axios.get('/api/encounter-list')
        .then(res => {
          this.setState({monsterList: res.data, maxHealth: res.data[this.props.monsterIndex].health, hasLoaded: true})
        })
        .catch(err => console.log(err))
    }

    

    render() {
        console.log(this.state.monsterList);
        console.log(this.props.monsterIndex);
        return (
            <div>                
                {this.state.hasLoaded
                ? (
                    <div className='enemy-box'>
                        <img className='enemy-image' src={this.state.monsterList[this.props.monsterIndex].img} alt={this.state.monsterList[this.props.monsterIndex].name} />
                        <p>Health:</p>
                        <p>{this.state.monsterList[this.props.monsterIndex].health}/{this.state.maxHealth} </p>
                    </div>
                )
                : null
                }    
            </div>
        )
    }
}

export default Enemies;