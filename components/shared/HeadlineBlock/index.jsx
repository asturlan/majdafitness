import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class HeadlineBlock extends Component {
    constructor(props) {
        super(props);
        this.introImg = require(`../../../assets/images/Shared/${props.config.imgSrc}`);
    }

    render() {
        return (
            <div className={`headline-block headline-block-${this.props.config.orientation !== undefined ? this.props.config.orientation : 'left'}`}>
                <div className="headline-img">
                    <img alt={this.props.config.alt} src={this.introImg}></img>
                    <div className="style-cube shadow-hard"></div>
                </div>
                <div className="headline-txt" style={{ backgroundColor: this.props.config.textBg }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

HeadlineBlock.propTypes = {
    children: PropTypes.any,
    config: PropTypes.object
};

export default HeadlineBlock;