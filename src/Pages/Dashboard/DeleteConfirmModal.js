import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { name, _id } = deletingProduct;
  const deleted = () => {
    fetch(
      `https://manufacturer-website-server-side-steel.vercel.app/product/${_id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted.`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Delete Confirme ${name}
          </h3>
          <div className="modal-action">
            <button onClick={() => deleted()} className="btn btn-xs btn-error">
              Delete
            </button>
            <label for="delete-confirm-modal" className="btn btn-xs">
              Cancel!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
