import React from "react";
import { Modal, Button, ModalDialog } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./DeleteModal.scss";
import ReactDOM from "react-dom";

function DeleteModal({
  deleteItem,
  closeModal,
  warehouseName,
  id,
  title,
  paragraph,
}) {
  // const handleDelete = () => {
  //   const item = props.id;
  //   props.deleteItem(item);
  //   props.closeModal();
  // };

  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div className="modal-dialog">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => closeModal()}
          >
            &times;
          </button>
          <div className="modal-content">
            <div className="modal-content--mobile">
              <div className="modal-header">
                <h1 className="modal-title">{title}</h1>
              </div>
              <div className="modal-body">
                <p className="body-large">{paragraph}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => closeModal()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  deleteItem(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default DeleteModal;
