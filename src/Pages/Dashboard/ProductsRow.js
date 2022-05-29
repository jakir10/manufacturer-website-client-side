import React from 'react';
import { toast } from 'react-toastify';

const ProductsRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { img, name, minQuantity, availableQuantity, price, _id } = product;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{minQuantity}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductsRow;