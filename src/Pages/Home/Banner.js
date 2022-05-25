import React from 'react';
import banner from '../../../src/assets/Banner.jpg';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner} className="w-full h-4/5" />
                </div>
            </div>
        </>
    );
};

export default Banner;