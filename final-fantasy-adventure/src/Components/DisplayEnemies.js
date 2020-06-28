import React from 'react';

const DisplayEnemies = props => {        
    return (
        <div className='enemy-box'>
            <img className='enemy-image' src={props.monster.img} alt={props.monster.name} />
            <p>Health:</p>
            <p>{props.monster.health}/{props.maxHealth} </p>
        </div>
    )

}

export default DisplayEnemies;