import React from 'react'

const DashBoardComponent = props => {
    if(props.players && props.players.length > 0){
        return (
            <>
                <h1>Players</h1>
                {props.players.map(e => {
                    return (
                        <div key={e.id} onClick={(evt) => props.playerSelected(evt) }>
                            {e.player_name}
                        </div>
                    )
                })}
            </>
        )
    }
}

export default DashBoardComponent;
