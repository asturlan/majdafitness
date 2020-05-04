import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import Head from 'next/head';

import Header from '../../components/shared/Header';
// import Footer from '../shared/Footer';
import './style.scss';

const MainLayout = (Page, config) => {
    return () => (
        <>
            <Head>
                <title>{config.title}</title>
                <meta name="description" content={config.description}></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-logo.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/img/M-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/img/M-16x16.png"></link>
                <link rel="shortcut icon" href="/img/M-32x32.png"></link>
                <meta charSet="utf-8"></meta>
                <meta name="og:title" content={config.title}></meta>
                <meta name="og:url" content="https://nextjs.org/learn"></meta>
                <meta name="og:description" content={config.description}></meta>
                <meta name="og:image" content="https://nextjs.org/static/twitter-cards/learn.png"></meta>
            </Head>
            <Header />
            <Page />
            {/* <Footer grayFooter={config.grayFooter ? true : false} hasExitNotice={config.hasExitNotice} /> */}
        </>
    );
};

export default MainLayout;