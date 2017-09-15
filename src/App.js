import React, { Component } from 'react';

import Constellation from './components/Constellation';
import { randomIntBetween } from './helpers/random';

import './App.css';

class App extends Component {
    render() {
        const BORDER_SPACE = 50;
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        return (
            <svg
                className="constellation"
                viewBox={ `0 0 ${viewport.width} ${viewport.height}` }
            >
                <Constellation
                    starCoords={ [
                        {
                            x: randomIntBetween(BORDER_SPACE, (viewport.width - BORDER_SPACE)),
                            y: randomIntBetween(BORDER_SPACE, (viewport.height - BORDER_SPACE))
                        },
                        {
                            x: randomIntBetween(BORDER_SPACE, (viewport.width - BORDER_SPACE)),
                            y: randomIntBetween(BORDER_SPACE, (viewport.height - BORDER_SPACE))
                        },
                        {
                            x: randomIntBetween(BORDER_SPACE, (viewport.width - BORDER_SPACE)),
                            y: randomIntBetween(BORDER_SPACE, (viewport.height - BORDER_SPACE))
                        },
                        {
                            x: randomIntBetween(BORDER_SPACE, (viewport.width - BORDER_SPACE)),
                            y: randomIntBetween(BORDER_SPACE, (viewport.height - BORDER_SPACE))
                        },
                        {
                            x: randomIntBetween(BORDER_SPACE, (viewport.width - BORDER_SPACE)),
                            y: randomIntBetween(BORDER_SPACE, (viewport.height - BORDER_SPACE))
                        }
                    ] }
                />
            </svg>
        );
    }
}

export default App;
