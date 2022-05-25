import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Full-coverage bolt-on guards are the way to go for any bike that can take them and that will be used all year round.</p>
                <p>Ratings: {review.rating}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3><p>{review.name}</p></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;