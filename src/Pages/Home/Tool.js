import React from 'react';

const Tool = ({ tool }) => {
    const { name, description, minOrderQuantity, avlQuantity, price } = tool;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='h-56 rounded-xl' src="" alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum Qunatity: {minOrderQuantity}</p>
                <p>Available Quantity: {avlQuantity}</p>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;