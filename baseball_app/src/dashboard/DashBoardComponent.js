import React from 'react'

const DashBoardComponent = props => {
    console.log(props)
    if(props.players && props.players.length > 0){
        return (
            <>
                <h1>Players</h1>
                {props.players.map(e => {
                    return (
                        <div key={e.id} onClick={() => props.playerSelected(e.id) }>
                            {e.player_name}
                        </div>
                    )
                })}
                {props.methods.map(e => {
                    return (
                        <button key={e} onClick={(evt) => props.handleClick(evt, e)}>{e.toUpperCase()}</button>
                    )
                })}
            </>
        )
    }
}

export default DashBoardComponent;
