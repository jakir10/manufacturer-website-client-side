import React from 'react';

const Brands = () => {
    return (
        <>
            <h2 className='my-24 text-primary text-center text-2xl font-bold uppercase'>Top Manufacturer Brands</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mb-10'>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/hyKQhjF/zzzwbw-Honda-Logo.jpg" alt="zzzwbw-Honda-Logo" border="0" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Honda</h2>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/cTZv3Pc/zzzwbw-BMW-Logo.jpg" alt="zzzwbw-BMW-Logo" border="0" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BMW</h2>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/hW5RqqX/zzzwbw-Ducati-Motor-Logo.jpg" alt="zzzwbw-Ducati-Motor-Logo" border="0" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ducati</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brands;