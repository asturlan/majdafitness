import React from 'react';
import PropTypes from 'prop-types';
import getConfig from '../utils/getConfig';
import MainLayout from '../layouts/main';

import HomepageCarousel from '../constants/carousel';

import AwesomeCarousel from '../components/shared/AwesomeCarousel';
import Achievements from '../components/Homepage/Achievements';
import HeadlineBlock from '../components/shared/HeadlineBlock';
import MyTips from '../components/Homepage/MyTips';

import './style.scss';

// IMAGES

const Homepage = props => {

    return (
        <div className="homepage">
            <div className="content">
                <div className="banner">
                    <AwesomeCarousel
                        media={ props.deviceDimensions.width > 767 ? HomepageCarousel.HomepageCarouselDT : HomepageCarousel.HomepageCarouselSP}/>
                </div>
                <div className="container">
                    <HeadlineBlock
                        config = {{
                            alt: 'My jurney',
                            imgSrc: 'Homepage/introImg.jpg',
                            orientation: 'right',
                            textBg: '#f4e0ff'
                        }}
                    >
                        <h1 className="highlight-text text-pink">Naslov test</h1>
                        <p>Kao osobni fitness trener pomažem ženskoj populaciji postići vrhunsku top formu, izgraditi samopouzdanje te zavoljeti sebe kao novu osobu.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat harum tempore asperiores. Eum exercitationem dolor cupiditate hic ut illum est ratione dignissimos ex eligendi necessitatibus illo, veritatis asperiores nobis.</p>
                    </HeadlineBlock>
                    <div className="achievement-container">
                        <Achievements />
                    </div>
                </div>
                <div className="my-tips">
                    <div className="container">
                        <div className="my-tips-headline">
                            <h1 className="highlight-text text-pink">Tapkate na mjestu i nema nikakvih pomaka?</h1>
                            <p>
                                Već godinama odlazite u tetetanu a ne vidite nikakve posebne rezultate? <br/><br/>
                                <span className="text-pink">Negdje griješite!</span>
                            </p>
                            <div className="style-line"></div>
                        </div>
                    </div>
                    <MyTips/>
                </div>
            </div>
        </div>
    );
};

Homepage.propTypes = {
    deviceDimensions: PropTypes.object
};

const config = getConfig('Homepage');
export default MainLayout(Homepage, config);