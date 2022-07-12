import React from "react";
import "../index.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

//with usestate we register differents states which we want to import in our app and react will react to changes in the state and allow us to render different output
//state allows us to render different output depending on which state is active
//usestate is a hook and can only be called in component functions
//usestate always return an array with two elements
//usestate is important for changing on what we see on the screen(for adding or removing elements,for changing texts...)
//we can store those two elements in a constant or we use array destructuring which is js feature that stores those two elements in different constants

//ex. className="card" -> className = key, card=attribute, key->attribute
//učio već na phpu key->attribute fokusiraj se :)
//sending parametar props on todo function
//curly braces {} executes js code

//we use this {modalIsOpen ? <Modal/> : null} because we want to display this function only if its clicked otherwise it will be shown all the time
//if the modalisopen is true I render the modal if its not I dont render anything
//{modalIsOpen && <Modal/>} IF BOTH CONDITIONS ARE TRUE THEN SECOND VALUE WILL BE RENDERED

//props are important for building reusable components

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function Delete() {
    setModalIsOpen(true);
  }

  //this function allows us to click on a backdrop to close modal
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={Delete}>
          DELETE
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop onClick={closeModal} />}
    </div>
  );
}

//onClick we are telling react that we want to react on a click element {} should contain function that would be executed when the click occurs
export default Todo;
