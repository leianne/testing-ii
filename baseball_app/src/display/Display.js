import React from 'react';

const Display = props => {
    if(!props.currPlayer.player_name) {
         return (
            <h3>Looks like the game is starting soon! Batter Up!</h3>
        )
    } else {
        return  (
            <>
            <h3>Up to bat: {props.currPlayer.player_name}</h3>
            <p>Strikes: {props.currPlayer.strikes}</p>
            <p>Hits: {props.currPlayer.hits}</p>
            <p>Balls: {props.currPlayer.balls}</p>
            </>
        )
       
    }
}

export default Display;
