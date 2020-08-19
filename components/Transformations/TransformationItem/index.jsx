import React, { useState } from 'react';
import PropTypes from 'prop-types';

import colors from '../../../constants/transformationColors';

import './style.scss';

const TransformationItem = props => {

    const [imgLoaded, setImgLoaded] = useState(false);
    const itemColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className='transformation-wrapper shadow-hard' style={{ borderColor: itemColor }}>
            <div>
                <div className='transformation' style={{ opacity: !imgLoaded ? '0' : '1' }}>
                    <div className='transformation-img'>
                        <img onLoad={() => {
                            setImgLoaded(true);
                        }} src={props.data[2]}></img>
                    </div>
                    <div className="transformation-info">
                        <p className='transformation-info--weeks'>{props.data[3]} tjedana</p>
                        <p className='transformation-info--name highlight-text' style={{ color: itemColor }}>{props.data[0]}</p>
                        <p className='transformation-info--desc'>{props.data[1]}</p>
                    </div>
                </div>
                <div className="img-loader" style={{ opacity: imgLoaded ? '0' : '1' }}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

TransformationItem.propTypes = {
    data: PropTypes.array
};

export default TransformationItem;