import React from 'react';
import getConfig from '../../utils/getConfig';
import MainLayout from '../../layouts/main';
import MyJurney from '../../components/About/MyJurney';
import HeadlineBlock from '../../components/shared/HeadlineBlock';
import './style.scss';

const About = () => {

    return (
        <div className="about-me">
            <div className="content">
                <div className="banner"></div>
                <div className="container">
                    <HeadlineBlock
                        config = {{
                            alt: 'My jurney',
                            imgSrc: '/About/introImg.jpg',
                            textBg: 'rgb(230, 196, 216)'
                        }}
                    >
                        <h1 className="highlight-text text-pink">Moje putovanje</h1>
                        <p>
                            Fitnessom sam se pocela baviti prije 10 godina. Prvih 5 godina rekreativno sam trenirala kako bih bila u formi. Vidjela sam kako mi se tijelo intenzivno mijenja te sam postala ovisna o tom sportu i svakodnevnom treniranju s ciljem da svoje tijelo dovedem do savršenstva.
                        </p>
                    </HeadlineBlock>
                    <MyJurney />
                </div>
            </div>
        </div>
    );
};

const config = getConfig('About');
export default MainLayout(About, config);