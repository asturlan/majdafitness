import React from 'react';
import MyJurneyItem from './MyJurneyItem';
import MyJurneyContent from '../../../constants/myJurney';

import './style.scss';

const MyJurney = () => {
    const renderJurney = () => (
        MyJurneyContent.map((item, index) => {
            let alignLeft = false;
            if (index % 2) alignLeft = true;
            return (
                <MyJurneyItem alignLeft={alignLeft} item={item} key={index}/>
            );
        })
    );

    return (
        <div className="my-jurney">
            {renderJurney()}
        </div>
    );
};

export default MyJurney;