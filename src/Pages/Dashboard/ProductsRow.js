import React from 'react';
import { toast } from 'react-toastify';

const ProductsRow = ({ product, index, refetch }) => {
    const { img, name, minQuantity, availableQuantity, price, _id } = product;

    const deleted = _id => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    refetch();
                }
            })
    }
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
            <td><button onClick={() => deleted(_id)} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default ProductsRow;