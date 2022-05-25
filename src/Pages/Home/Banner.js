import React from 'react';
import banner from '../../../src/assets/Banner.jpg';

const Banner = () => {
    return (
        <>
            <div class="carousel w-full ">
                <div id="item1" class="carousel-item w-full">
                    <img src={banner} class="w-full h-4/5" />
                </div>
            </div>
        </>
    );
};

export default Banner;