import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductsRow from './ProductsRow';

const ManageProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-3xl'>manage products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th> Availability</th>
                            <th> Price</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductsRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></ProductsRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProducts;