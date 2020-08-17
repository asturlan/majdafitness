import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HeadlineBlock = props => {
    return (
        <div className={`headline-block headline-block-${props.config.orientation !== undefined ? props.config.orientation : 'left'}`}>
            <div className="headline-img">
                <img alt={props.config.alt} src={require(`../../../assets/images${props.config.imgSrc}`)}></img>
                <div className="style-cube shadow-hard"></div>
            </div>
            <div className="headline-txt" style={{ backgroundColor: props.config.textBg }}>
                {props.children}
            </div>
        </div>
    );
};

HeadlineBlock.propTypes = {
    children: PropTypes.any,
    config: PropTypes.object
};

export default HeadlineBlock;