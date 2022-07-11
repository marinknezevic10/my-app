import React from "react";
import "../index.css";
import { useState } from "react";

//with usestate we register differents states which we want to import in our app and react will react to changes in the state and allow us to render different output
//state allows us to render different output depending on which state is active
//usestate is a hook and can only be used in component functions
//ex. className="card" -> className = key, card=attribute, key->attribute
//učio već na phpu key->attribute fokusiraj se :)
//sending parametar props on todo function
//curly braces {} executes js code
function Todo(props) {
  useState();

  function Delete() {}

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={Delete}>
          DELETE
        </button>
      </div>
    </div>
  );
}

//onClick we are telling react that we want to react on a click element {} should contain function that would be executed when the click occurs
export default Todo;
