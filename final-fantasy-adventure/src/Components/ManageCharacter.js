import React from 'react';

const ManageCharacter = props => {
    return (
        <div>
            <div className='character'>
                <div className='character-info'>
                    <h2>{props.character.name}</h2>
                    <section className='character-stats'>
                        <ul>
                            <li>Strength: 20</li>
                            <li>Intellect: 13</li>
                            <li>Speed: 10</li>
                        </ul>
                        <span className='health-area'>
                            <section>
                                <p>Health:</p> 
                                <p>{props.character.health}/{props.maxHealth}</p>
                            </section>
                            <img src='https://ffxiv.gamerescape.com/w/images/d/d5/Potion_Icon.png' alt='Potion' onClick={() => props.healDamageFn()} />
                        </span>
                    </section>
                    <section className='character-abilities'>                        
                        <img src={props.character.abilities[0].img} alt={props.character.abilities[0].name} onClick={() => props.dealDamageFn(props.character.abilities[0].damage)} />
                        <img src={props.character.abilities[1].img} alt={props.character.abilities[1].name} onClick={() => props.dealDamageFn(props.character.abilities[1].damage)} />
                        <img src={props.character.abilities[2].img} alt={props.character.abilities[2].name} onClick={() => props.dealDamageFn(props.character.abilities[2].damage)} />
                    </section>
                </div> 
                <img className='character-image' src={props.character.img} alt={props.character.name} />                       
            </div>    
        </div>
    )
}

export default ManageCharacter;