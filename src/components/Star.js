import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Star extends Component {
    render() {
        const { width, height, xPos = 0, yPos = 0 } = this.props;

        return (
            <svg
                width={ `${width}px` }
                height={ `${height}px` }
                x={ `${xPos - (width / 2)}px` }
                y={ `${yPos - (height / 2)}px` }
                version="1.1"
                viewBox="0 0 43.9 43.9"
                style={ { 'enableBackground': 'new 0 0 43.9 43.9' } }
                xmlSpace="preserve"
            >
                <filter id="blurInner" x="-100%" y="-100%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
                </filter>
                <filter id="blurOuter" x="-100%" y="-100%" width="400%" height="400%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
                </filter>
                <filter id="blurTail">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                </filter>
                <circle className="star__outer-glow" filter="url(#blurOuter)" cx="22" cy="22" r="4.8" />
                <path className="star__tail" filter="url(#blurTail)" d="M22,0c0,0-0.5,20.7-1.2,22H22h1.2C22.4,20.7,22,0,22,0z"/>
                <path className="star__tail" filter="url(#blurTail)" d="M22,43.9c0,0,0.5-20.7,1.2-22H22h-1.2C21.5,23.2,22,43.9,22,43.9z"/>
                <path className="star__tail" filter="url(#blurTail)" d="M43.9,22c0,0-20.7-0.5-22-1.2V22v1.2C23.2,22.4,43.9,22,43.9,22z"/>
                <path className="star__tail" filter="url(#blurTail)" d="M0,22c0,0,20.7,0.5,22,1.2V22v-1.2C20.7,21.5,0,22,0,22z"/>
                <circle className="star__inner-glow" filter="url(#blurInner)" cx="22" cy="22" r="3"/>
            </svg>
        );
    }
}

Star.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number
};

export default Star;
