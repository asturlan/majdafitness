import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Navigation from '../../shared/Header/Navigation';

import './style.scss';

import logo from '../../../assets/images/logo-transparent.png';

const Header = props => (
    <>
        <div className="header">
            <Link href="/"><img className="logo" src={logo} alt="MajdaFitness"></img></Link>
            <Navigation deviceDimensions={props.deviceDimensions}/>
            {/* <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div> */}
        </div>
        <div className="style-line"></div>
    </>
);

Header.propTypes = {
    deviceDimensions: PropTypes.object
};

export default Header;