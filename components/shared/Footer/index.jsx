import React from 'react';

import './style.scss';

import facebookLogo from '../../../assets/images/Shared/icons8-facebook-f-48.png';
import instagramLogo from '../../../assets/images/Shared/icons8-instagram-48.png';

const Footer = () => (
    <div className="footer">
        <div className="style-line">
            <div className='socials'>
                <a href='https://www.facebook.com/MajdaVasicFitness/' target='_blank' rel='noopener noreferrer'>
                    <img className="social-logo" src={facebookLogo} alt="facebook" />
                </a>
                <a href='https://www.instagram.com/majdavasic/' target='_blank' rel='noopener noreferrer'>
                    <img className="social-logo" src={instagramLogo} alt="instagram" />
                </a>
            </div>
            <div>
                <p className='copyright-disclaimer'>
                    ©2020 Majda Vasić
                </p>
            </div>
        </div>
    </div>
);

export default Footer;