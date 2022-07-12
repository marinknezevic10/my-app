//allows the interaction with the page whilst the modal is open
//when we press delete then a popup appears with confirmation if we want to delete it or not backdrop function allows us to press backdrop page to also close the modal
//div is written as a self closing tag because i dont need any content inside it

import React from "react";

//by clicking on an backdrop we closse the modal
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} />;
}

export default Backdrop;
