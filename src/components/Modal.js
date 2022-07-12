//modal function which displays div where we can decide if we want to delete an object or not after pressing a delete button
import React from "react";

function Modal(props) {
  function Cancel() {
    props.onCancel();
  }

  function Confirm() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={Cancel}>
        Cancel
      </button>
      <button className="btn" onClick={Confirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
