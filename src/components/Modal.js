//modal function which displays div where we can decide if we want to delete an object or not after pressing a delete button
import React from "react";

function Modal() {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
