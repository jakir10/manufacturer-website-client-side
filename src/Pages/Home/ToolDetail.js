import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tools from './Tools';

const ToolDetail = () => {
    const { toolsId } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        // const url = `https://https://pacific-falls-91567.herokuapp.com/inventory/${inventoryId}`;
        const url = `http://localhost:5000/tool/${toolsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [toolsId]);

    return (
        <div>
            <h2>Tool Details: {toolsId}</h2>
            <div class="card w-96 bg-base-100 shadow-xl">
                {/* <figure>
                    <img src={tool.img} alt="" />
                </figure> */}
                <figure class="px-10 pt-10">
                    <img src={tool.img} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p>Minimum Qunatity: {tool.minOrderQuantity}</p>
                    <p>Available Quantity: {tool.avlQuantity}</p>
                    <p>Price : {tool.price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolDetail;