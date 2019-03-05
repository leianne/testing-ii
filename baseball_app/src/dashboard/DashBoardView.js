import React from 'react';
import DashBoardComponent from './DashBoardComponent';

class DashBoardView extends React.Component {
    render() {
        return (
            <DashBoardComponent playerSelected={this.props.playerSelected} players={this.props.players} />
        )
    }
}

export default DashBoardView;