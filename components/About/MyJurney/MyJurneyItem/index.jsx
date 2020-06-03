/* eslint-disable no-constant-condition */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class MyJurneyItem extends Component {
    constructor(props) {
        super(props);
        this.jurneyImg = require(`../../../../assets/images/About/${props.item.img}`);
    }

    componentDidMount() {
        const scrollReveal = require('scrollreveal').default;
        scrollReveal().reveal('.my-jurney-item');
    }

    render() {
        return (
            <div ref={this.jurneyItemRef} className={`my-jurney-item ${ this.props.alignLeft ? 'item-left' : ''}`}>
                <div className={`my-jurney-desc ${ this.props.alignLeft ? 'desc-left' : ''}`}>
                    <span>{this.props.item.year}</span>
                    <div>
                        <h2 className="highlight-text text-purple">{this.props.item.headline}</h2>
                        <p>{this.props.item.text}</p>
                    </div>
                </div>
                <div className="my-jurney-img">
                    <img className="shadow-hard" alt="My-journey" src={this.jurneyImg}></img>
                </div>
            </div>
        );
    }
}

MyJurneyItem.propTypes = {
    border: PropTypes.string,
    item: PropTypes.object,
    alignLeft: PropTypes.bool
};

export default MyJurneyItem;