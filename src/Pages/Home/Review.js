import React from 'react';

const Review = ({ review }) => {
    const { rating, name, userReview } = review;
    return (
        <div className=" card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <p>Ratings: {rating}</p>
                <div className=" ">
                    <div>
                        <h3><p>Name: {name}</p></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;