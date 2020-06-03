import React, { useEffect } from 'react';
import achievements from '../../../constants/achievements';

import './style.scss';

const Achievements = () => {

    useEffect(() => {
        const scrollReveal = require('scrollreveal').default;
        let delay = 200;
        for (let i = 0; i < achievements.length; i++) {
            scrollReveal().reveal(`.achievement[data-index="${i}"]`, { delay });
            delay += 50;
        }
    });

    const renderAchievements = () => (
        achievements.map((item, index) => (
            <div className="achievement" key={index} data-index={index}>
                <p className="achievement-number shadow-hard">{item.number}</p>
                <p className="achievement-text">{item.text}</p>
            </div>
        ))
    );

    return (
        <div className="my-achievements">
            {renderAchievements()}
        </div>
    );
};

export default Achievements;