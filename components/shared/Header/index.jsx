import React from 'react';
import Navigation from '../../shared/Header/Navigation';

import './style.scss';

import logo from '../../../assets/images/logo-transparent.png';

const Header = () => (
    <>
        <div className="header">
            <img className="logo" src={logo} alt="MajdaFitness"></img>
            <Navigation/>
        </div>
        <div className="style-line"></div>
    </>
);

export default Header;