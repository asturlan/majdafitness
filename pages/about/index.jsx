import React from 'react';
import getConfig from '../../utils/getConfig';
import MainLayout from '../../layouts/main';
import MyJurney from '../../components/About/MyJurney';
import './style.scss';

// IMAGES
import introImg from '../../assets/images/About/introImg.png';

const About = () => {
    return (
        <div className="about-me">
            <div className="content">
                <div className="banner"></div>
                <div className="container">
                    <div className="introduction">
                        <div className="intro-img">
                            <img alt="My journey" src={introImg}></img>
                        </div>
                        <div className="intro-txt">
                            <h1 className="highlight-text-purple">Moje putovanje</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat fuga, nobis, eaque reiciendis accusantium, eos voluptates pariatur dignissimos saepe maxime praesentium nostrum perspiciatis suscipit odit ut aliquid deleniti blanditiis velit.
                            </p>
                        </div>
                    </div>
                    <MyJurney />
                </div>
            </div>
        </div>
    );
};

const config = getConfig('About');
export default MainLayout(About, config);