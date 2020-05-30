import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MyJurneyItem = props => {
    const jurneyImg = require(`../../../../assets/images/About/${props.item.img}`);
    return (
        <div className={`my-jurney-item ${ props.alignLeft ? 'item-left' : ''}`}>
            <div className={`my-jurney-desc ${ props.alignLeft ? 'desc-left' : ''}`}>
                <span>{props.item.year}</span>
                <div>
                    <h2 className="highlight-text-purple">loremlorem ipsum</h2>
                    <p>{props.item.text}</p>
                </div>
            </div>
            <div className="my-jurney-img">
                <img className="shadow-hard" alt="My-journey" src={jurneyImg}></img>
            </div>
        </div>
    );
};

MyJurneyItem.propTypes = {
    border: PropTypes.string,
    item: PropTypes.object,
    alignLeft: PropTypes.bool
};

export default MyJurneyItem;