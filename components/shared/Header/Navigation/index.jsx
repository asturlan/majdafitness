import React from 'react';
import Link from 'next/link';
import navigation from '../../../../constants/navigation';

import './style.scss';

const Navigation = () => {

    const renderNavigation = () => (
        navigation.map((navitem, index) => (
            <li key={index}><Link href={navitem.link}><a>{navitem.text}</a></Link></li>
        ))
    );

    return (
        <ul className="navigation">
            {renderNavigation()}
        </ul>
    );
};

export default Navigation;