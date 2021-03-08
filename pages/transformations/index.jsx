import React, { useState, useEffect } from 'react';
import getConfig from '../../utils/getConfig';

import MainLayout from '../../layouts/main';

import TransformationItem from '../../components/Transformations/TransformationItem';
import GalleryModal from '../../components/shared/GalleryModal';

import './style.scss';

const Transformations = () => {

    const [transformations, setTransformations] = useState(null);
    const [showImageModal, setShowImageModal] = useState(false);
    const [gallerySrc, setGallerySrc] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1WLwpT_KEcSXg7QwJN3812V2sUg3zaE5m6kptNWKJsg4/values/A2:E?key=AIzaSyAdOk9elDGH9R6NIveb4KkumckfleRF5N8');
            if (result.ok) {
                const jsonResult = await result.json();
                setTransformations(jsonResult.values);
                console.log(jsonResult.values);
            }
        };

        fetchData();
    }, []);

    const setImageGallery = (gallerySrc) => {
        setGallerySrc(gallerySrc.split(','));
        setShowImageModal(true);
    };

    const renderTransformations = () => (
        transformations.map((data, index) => (
            <TransformationItem handleClick={setImageGallery} key={index} data={data} />
        ))
    );

    return (
        <>
            <div className="container">
                <div className="my-tips-headline">
                    <h1 className="highlight-text text-pink">Lorem ipsum, dolor sit</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quod incidunt excepturi eos fugiat, soluta quaerat
                    </p>
                    <div className="style-line"></div>
                </div>
            </div>
            <div className="transformations container">
                {transformations && renderTransformations()}
            </div>
            {showImageModal && <GalleryModal gallerySrc={gallerySrc}/>}
        </>
    );
};

const config = getConfig('Transformations');
export default MainLayout(Transformations, config);