import React from 'react';

const ManageCharacter = props => {
    return (
        <div>
            <div className='character'>
                <div className='character-info'>
                    <h2>{props.character[0].name}</h2>
                    <section className='character-stats'>
                        <ul>
                            <li>Strength: 20</li>
                            <li>Intellect: 13</li>
                            <li>Speed: 10</li>
                        </ul>
                        <span>
                            <p>Health:</p> 
                            <p>{props.character[0].health}/{props.maxHealth}</p>
                        </span>
                    </section>
                    <section className='character-abilities'>
                        {props.myTurn === true
                        ? (
                            <div className='character-abilities'>
                                <img src={props.character[0].abilities[0].img} alt={props.character[0].abilities[0].name} onClick={() => props.handleTurnFn(props.character[0].abilities[0].damage)} />
                                <img src={props.character[0].abilities[1].img} alt={props.character[0].abilities[1].name} />
                                <img src={props.character[0].abilities[2].img} alt={props.character[0].abilities[2].name} />
                            </div>
                        )
                        : (
                            <div className='character-abilities'>
                                <img src={props.character[0].abilities[0].img} alt={props.character[0].abilities[0].name} />
                                <img src={props.character[0].abilities[1].img} alt={props.character[0].abilities[1].name} />
                                <img src={props.character[0].abilities[2].img} alt={props.character[0].abilities[2].name} />
                                {props.handleTurnFn()}
                            </div>
                        )
                        }
                        
                    </section>
                </div> 
                <img className='character-image' src={props.character[0].img} alt={props.character[0].name} />                       
            </div>    
        </div>
    )
}

export default ManageCharacter;