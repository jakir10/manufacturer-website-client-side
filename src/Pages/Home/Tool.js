import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='h-56 rounded-xl' src={tool.img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <p>Minimum Qunatity{tool.minOrderQuantity}</p>
                <p>Available Quantity: {tool.avlQuantity}</p>
                <p>Price: ${tool.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;