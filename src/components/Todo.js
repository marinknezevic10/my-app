import React from "react";
import "../index.css";

//sending parametar props on todo function
//curly braces {} executes js code
function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn">DELETE</button>
      </div>
    </div>
  );
}

export default Todo;
