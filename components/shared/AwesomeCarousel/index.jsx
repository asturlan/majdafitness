import React from 'react';
import PropTypes from 'prop-types';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './style.scss';

const AwesomeCarousel = props => (
    <AwesomeSlider
        media={props.media}
    />
);

AwesomeCarousel.propTypes = {
    media: PropTypes.array
};

export default AwesomeCarousel;