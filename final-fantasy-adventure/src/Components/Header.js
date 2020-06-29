import React from 'react';

const Header = props => {
    return (
        <div>
            {props.characterCreation
            ? (
                <h1>CREATE YOUR CHARACTER</h1>
            )
            : (
                <h1>SET SAIL FOR ADVENTURE!</h1>
            )   
            }
            
        </div>
    )
}

export default Header;