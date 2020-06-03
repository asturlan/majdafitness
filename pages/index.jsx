import React from 'react';
import getConfig from '../utils/getConfig';
import MainLayout from '../layouts/main';

import { HomepageCarousel } from '../constants/carousel';

import AwesomeCarousel from '../components/shared/AwesomeCarousel';
import Achievements from '../components/Homepage/Achievements';
import HeadlineBlock from '../components/shared/HeadlineBlock';

import './style.scss';

// IMAGES

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="content">
                <div className="banner">
                    <AwesomeCarousel media={HomepageCarousel}/>
                </div>
                <div className="container">
                    <HeadlineBlock
                        config = {{
                            alt: 'My jurney',
                            imgSrc: 'Homepage/introImg.jpg',
                            orientation: 'right',
                            textBg: '#888888'
                        }}
                    >
                        <p>Kao osobni fitness trener pomažem ženskoj populaciji postići vrhunsku top formu, izgraditi samopouzdanje te zavoljeti sebe kao novu osobu.</p>
                        <p>Kao osobni fitness trener pomažem ženskoj populaciji postići vrhunsku top formu, izgraditi samopouzdanje te zavoljeti sebe kao novu osobu.</p>
                        <p>Kao osobni fitness trener pomažem ženskoj populaciji postići vrhunsku top formu, izgraditi samopouzdanje te zavoljeti sebe kao novu osobu.</p>
                    </HeadlineBlock>
                    <div className="achievement-container">
                        <Achievements />
                    </div>
                </div>
                <div className="style-div-pink shadow-hard">
                    sfsedfdsf
                </div>
            </div>
        </div>
    );
};

const config = getConfig('Homepage');
export default MainLayout(Homepage, config);