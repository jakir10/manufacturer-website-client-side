import React from 'react';
import people1 from '../../assets/people/People1.jpg'
import people2 from '../../assets/people/People2.jpg'
import people3 from '../../assets/people/People3.jpg'
import Review from './Review';

const Reviews = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Mark Jhon',
            review: '',
            rating: '4/5',
            img: people1

        },
        {
            _id: 2,
            name: 'Olivia',
            review: '',
            rating: '5/5',
            img: people2
        },
        {
            _id: 3,
            name: 'James Robert',
            review: '',
            rating: '3/5',
            img: people3
        },
    ]

    return (
        <section className='my-24 text-center '>
            <div>
                <h2 className='text-2xl text-primary font-bold uppercase'>All Reviews</h2>
                <h2 className='text-xl text-secondary font-bold uppercase'>What Our Client say</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;