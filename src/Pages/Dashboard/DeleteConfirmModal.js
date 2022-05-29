import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { name, _id } = deletingProduct;
    const deleted = () => {
        fetch(`https://radiant-wave-25983.herokuapp.com/product/${_id}`, {
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
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Delete Confirme ${name}</h3>
                    <div class="modal-action">
                        <button onClick={() => deleted()} className="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;