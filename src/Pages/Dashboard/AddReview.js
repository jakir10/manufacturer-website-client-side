import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset, } = useForm();
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tool').then(res => res.json()))

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Product added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the product')
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-secondary text-2xl">Add Review</h2>
            {/* Name field with error massage */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    }
                    )}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>
            {/* review */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Review</span>
                </label>
                <input type="text" placeholder="write Review"
                    className="input input-bordered w-full max-w-xs"
                    {...register("userReview", {
                        required: {
                            value: true,
                            message: 'Review is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.userReview.message}</span>}
                </label>
            </div>
            {/* Rating field */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <input type="text" placeholder="giva a rating 1-5"
                    className="input input-bordered w-full max-w-xs"
                    {...register("rating", {
                        required: {
                            value: true,
                            message: 'Rating is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                </label>
            </div>


            <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add Review" />
        </form>
    );
};

export default AddReview;