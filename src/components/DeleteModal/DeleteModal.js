import React from "react";
import { Modal, Button, ModalDialog } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DeleteModal.scss";

function DeleteModal(props) {
  const handleDelete = () => {
    const item = props.id;
    props.deleteItem(item);
    props.closeModal();
  };

  return (
    <div>
      <Modal show={true}>
        <Modal.Header
          closeButton
          onClick={() => {
            props.closeModal();
          }}
        >
          <Modal.Title>Delete {props.warehouseName} Warehouse</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Please confirm that you'd like to delete the {props.warehouseName}{" "}
            warehouse from the list of warehouses. You won't be able to undo
            this action.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.closeModal()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;
