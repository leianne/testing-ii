import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect'
import Display from './Display';

it('should render "starting soon" if there is no current player selected', () => {
    const player = {
        player_name: ''
    }
    const {getByText} = render(<Display currPlayer={player}/>)
    expect(getByText(/starting soon/i)).toBeInTheDocument()
} )