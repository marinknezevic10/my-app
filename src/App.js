import Todo from "./components/Todo";
import React from "react";
import "./index.css";
//although code looks like html behind the scenes it transforms into standard js
function App() {
  return (
    <div>
      <h1>To do list</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Now I'm happy" />
    </div>
  );
}

//exporting means that we make certain function available outside of this file :)
export default App;
