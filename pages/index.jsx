import React from 'react';
// import Link from 'next/link';
import getConfig from '../utils/getConfig';
import MainLayout from '../layouts/main';
import AwesomeCarousel from '../components/shared/AwesomeCarousel';
import { HomepageCarousel } from '../constants/carousel';

import './style.scss';

// IMAGES

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="content">
                <div className="banner">
                    <AwesomeCarousel media={HomepageCarousel}/>
                </div>
            </div>
        </div>
    );
};

const config = getConfig('Homepage');
export default MainLayout(Homepage, config);