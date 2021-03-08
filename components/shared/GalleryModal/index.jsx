import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const GalleryModal = props => {
    const [imgLoaded, setImgLoaded] = useState(true);

    return (
        <div className="gallery-modal" style={{ opacity: !imgLoaded ? '0' : '1' }}>
            <div className="gallery-modal--overlay"></div>
            <img className="gallery-modal--img" onLoad={() => {
                setImgLoaded(true);
            }} src={props.gallerySrc[0]}></img>
            <div className="img-loader" style={{ opacity: imgLoaded ? '0' : '1' }}>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

GalleryModal.propTypes = {
    gallerySrc: PropTypes.array
};

export default GalleryModal;