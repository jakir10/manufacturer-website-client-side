import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, img, name, description, minOrderQuantity, avlQuantity, price } = tool;
    const navigate = useNavigate();

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='h-56 rounded-xl' src={img} alt={name} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum Qunatity: {minOrderQuantity}</p>
                <p>Available Quantity: {avlQuantity}</p>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;