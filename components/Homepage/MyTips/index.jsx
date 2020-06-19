import React from 'react';
import myTips from '../../../constants/myTips';

import './style.scss';

const MyTips = () => {

    return (
        <div className="my-tips-block">
            {myTips.map((tip, index) => (
                <div className="my-tip" key={index}>
                    <div className="my-tip--img"
                        style={{ backgroundImage: `url(${require('../../../assets/images/Homepage/' + tip.imgSrc)})` }}
                    >
                    </div>
                    <div className="my-tip--txt">
                        <p className="tip-number">Savijet {index + 1}</p>
                        <div className="style-line style-line-thin"></div>
                        <h4>{tip.headTxt}</h4>
                        <p>{tip.contentTxt}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyTips;