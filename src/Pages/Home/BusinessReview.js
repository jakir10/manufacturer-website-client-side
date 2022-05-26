import React from 'react';
import BusinessReviewCard from './BusinessReviewCard';
import customercare from '../../assets/icons/customer-care.svg'
import geography from '../../assets/icons/geography.svg'
import peoplesGroup from '../../assets/icons/peoples-group.svg'
import positiveFeedback from '../../assets/icons/positive-feedback.svg'

const BusinessReview = () => {
    return (
        // Business summary card dynamically show
        <>
            <h2 className='my-24 text-primary text-center text-2xl font-bold uppercase'>Business Summary</h2>
            <div className='grid grid-cols-1 2 lg:grid-cols-4 gap-5 '>
                <BusinessReviewCard cardTitle={"Customer Support"} description={"24/7"} img={customercare}></BusinessReviewCard>
                <BusinessReviewCard cardTitle={"Countries"} description={"15+"} img={geography}></BusinessReviewCard>
                <BusinessReviewCard cardTitle={"Happy Clients"} description={"150+"} img={peoplesGroup}></BusinessReviewCard>
                <BusinessReviewCard cardTitle={"FeedBacks"} description={"120+"} img={positiveFeedback}></BusinessReviewCard>
            </div>
        </>
    );
};

export default BusinessReview;