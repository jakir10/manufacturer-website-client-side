import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessReview from './BusinessReview';
import Reviews from './Reviews';
import Tools from './Tools';
import Offer from './OwnSection/Offer';
import Brands from './OwnSection/Brands';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessReview></BusinessReview>
            <Reviews></Reviews>
            <Offer></Offer>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Home;