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
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 '>
                <BusinessReviewCard cardTitle={"Customer Support"} description={"24/7"} img={customercare}></BusinessReviewCard>
                <BusinessReviewCard cardTitle={"Countries"} description={"15+"} img={geography}></BusinessReviewCard>
                <BusinessReviewCard cardTitle={"Happy Clients"} description={"150+"} img={peoplesGroup}></BusinessReviewCard>
                <BusinessReviewCard cardTitle={"FeedBacks"} description={"120+"} img={positiveFeedback}></BusinessReviewCard>
            </div>

            <div className="stats bg-primary text-primary-content">

                <div className="stat">
                    <div className="stat-title">Have You Any Query</div>
                    <div className="stat-value">Please Contact Us</div>
                </div>

                <div className="stat">
                    <div className="stat-actions">
                        <button className="btn btn-sm">Contuct us</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BusinessReview;