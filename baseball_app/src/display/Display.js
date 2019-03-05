import React from 'react';

const Display = props => {
    return (
        <>
            {props.currPlayer.player_name ? <h3>Up to bat: {props.currPlayer.player_name}</h3> : <h3>Looks likes the game is starting in a few!</h3>}
        </>
    )
}

export default Display;
