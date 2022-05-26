import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessReview from './BusinessReview';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessReview></BusinessReview>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;