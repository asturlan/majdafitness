import React, { useEffect, useState } from 'react';

import arrowUp from '../../../assets/images/Shared/icons8-expand-arrow-100.png';

import './style.scss';

const ScrollTop = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return function cleanup () {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const checkScrollTop = () => {
        window.pageYOffset > 200 ? setShowScroll(true) : setShowScroll(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="scroll-top"
            onClick={scrollToTop}
            style={{ visibility: showScroll ? 'visible' : 'hidden' }}
        >
            <img className="scroll-top--arrow" src={arrowUp}/>
        </div>
    );
};

export default ScrollTop;