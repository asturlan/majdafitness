import React from 'react';
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
                <div className="test">

                </div>
            </div>
        </div>
    );
};

const config = getConfig('Homepage');
export default MainLayout(Homepage, config);