import React, { Component } from 'react';

import Constellation from './components/Constellation';
import { randomIntBetween } from './helpers/random';

import './App.css';

class App extends Component {
    render() {
        return (
            <svg viewBox="0 0 800 600" className="constellation">
                <Constellation
                    starCoords={ [
                        { x: randomIntBetween(0, 200), y: randomIntBetween(0, 200) },
                        { x: randomIntBetween(100, 300), y: randomIntBetween(100, 300) },
                        { x: randomIntBetween(200, 400), y: randomIntBetween(200, 400) },
                        { x: randomIntBetween(300, 500), y: randomIntBetween(300, 500) },
                        { x: randomIntBetween(400, 600), y: randomIntBetween(400, 600) }
                    ] }
                />
            </svg>
        );
    }
}

export default App;
