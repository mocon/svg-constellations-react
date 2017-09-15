import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Connector extends Component {
    render() {
        const { startXy = [0,0], endXy = [0,0] } = this.props;

        return (
            <svg height="100%" width="100%">
                <filter id="blurLine">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                </filter>
                <line
                    className="connector"
                    filter="url(#blurLine)"
                    x1={ `${startXy[0]}px` }
                    y1={ `${startXy[1]}px` }
                    x2={ `${endXy[0]}px` }
                    y2={ `${endXy[1]}px` }
                />
            </svg>
        );
    }
}

Connector.propTypes = {
    startXy: PropTypes.array,
    endXy: PropTypes.array
};

export default Connector;
