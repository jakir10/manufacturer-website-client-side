import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;