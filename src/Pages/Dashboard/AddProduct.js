import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tool').then(res => res.json()))

    // imagebb api
    const imageStorageKey = '13fef34c3ca2fbe67a4aa7a5b0e8be58';


    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        img: data.img,
                        name: data.name,
                        description: data.description,
                        minQuantity: data.minQuantity,
                        availableQuantity: data.availableQuantity,
                        price: data.price

                    }
                    // sending to database
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
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
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h2 className="text-2xl">Add a New Product</h2>
            <ToastContainer></ToastContainer>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>


                {/* description */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Product description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="10"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Min Quantity</span>
                    </label>
                    <input type="text" placeholder="min quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minQuantity", {
                            required: {
                                value: true,
                                message: 'minQuantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="text" placeholder="available quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'available quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;