import React from 'react';
import notfound from '../../assets/NotFound.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-red-500 text-2xl mt-5 my-10'>Page not Found</h2>
            <img className='w-100 ' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;
