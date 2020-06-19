import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import navigation from '../../../../constants/navigation';

import './style.scss';

const Navigation = props => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const renderNavigationItems = () => (
        navigation.map((navitem, index) => (
            <li key={index}><Link href={navitem.link}><a>{navitem.text}</a></Link></li>
        ))
    );

    const renderSPNavigation = () => (
        <div className="navigationSP">
            <div onClick={() => {
                setHamburgerOpen(!hamburgerOpen);
            }}
            className={`hamburger-menu-wrapper ${hamburgerOpen ? 'open' : ''}`}
            >
                <div className="hamburger-menu"></div>
            </div>
            <div className={`hamburger-menu-nav ${hamburgerOpen ? 'open' : ''}`}>
                <ul>
                    {renderNavigationItems()}
                </ul>
            </div>
        </div>
    );

    const renderDTNavigation = () => (
        <ul className="navigationDT">
            {renderNavigationItems()}
        </ul>
    );

    return (
        <>
            { props.deviceDimensions.width > 767 ? renderDTNavigation() : renderSPNavigation()}
        </>
    );
};

Navigation.propTypes = {
    deviceDimensions: PropTypes.object
};

export default Navigation;