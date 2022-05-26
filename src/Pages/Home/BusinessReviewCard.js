import React from 'react';

const BusinessReviewCard = ({ img, cardTitle, description }) => {
    return (
        // Business summary card
        <section className="card lg:card-side  bg-base-100 mt-8">
            <div className='items-center mx-auto'>
                <figure><img className='h-8 w-8' src={img} /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title items-center text-primary" >{description}</h2>
                    <p className='text-secondary'>{cardTitle}</p>
                </div>
            </div>
        </section>
    );
};


export default BusinessReviewCard;