import React from "react";
import { Modal, Button, ModalDialog } from "react-bootstrap";

import "./DeleteModal.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

function DeleteModal(props) {
  const handleDelete = () => {
    const item = props.id;
    props.deleteItem(item);
    props.closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-dialog">
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={() => props.closeModal()}
        >
          &times;
        </button>
        <div className="modal-content">
          <div className="modal-content--mobile">
            <div className="modal-header">
              <h1 className="modal-title">
                Delete {props.warehouseName} Warehouse?
              </h1>
            </div>
            <div className="modal-body">
              <p className="body-large">
                Please confirm that you'd like to delete the{" "}
                {props.warehouseName} warehouse from the list of warehouses. You
                won't be able to undo this action.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => props.closeModal()}
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
