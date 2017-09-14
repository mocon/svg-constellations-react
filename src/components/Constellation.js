import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Star from './Star';
import Connector from './Connector';
import { randomIntBetween } from '../helpers/random';

class Constellation extends Component {
    renderLines = () => {
        const { starCoords } = this.props;
        const numberOfLines = starCoords.length - 1;
        let lines = [];

        for (let i = 0; i < numberOfLines; i++) {
            lines.push(
                <Connector
                    key={ i }
                    startXy={ [starCoords[i].x, starCoords[i].y] }
                    endXy={ [starCoords[i + 1].x, starCoords[i + 1].y] }
                />
            );
        }

        return lines;
    }

    render() {
        const { starCoords } = this.props;

        return (
            <svg>
                { this.renderLines() }
                {
                    starCoords.map((star, index) => {
                        const randomSize = randomIntBetween(30, 60);

                        // Render stars
                        return (
                            <Star
                                key={ index }
                                width={ randomSize }
                                height={ randomSize }
                                xPos={ star.x }
                                yPos={ star.y }
                            />
                        );
                    })
                }
            </svg>
        );
    }
}

Constellation.propTypes = {
    starCoords: PropTypes.array.isRequired
};

export default Constellation;
