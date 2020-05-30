import React from 'react';
import Link from 'next/link';
import Navigation from '../../shared/Header/Navigation';

import './style.scss';

import logo from '../../../assets/images/logo-transparent.png';

const Header = () => (
    <>
        <div className="header">
            <Link href="/"><img className="logo" src={logo} alt="MajdaFitness"></img></Link>
            <Navigation/>
            {/* <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div> */}
        </div>
        <div className="style-line"></div>
    </>
);

export default Header;