//blocks the interaction with the page whilst the modal is open
//when we press delete then a popup appears with confirmation if we want to delete it or not backdrop function forbids any actions on the page until we press confirm or cancel
//div is written as a self closing tag because i dont need any content inside it

import React from "react";

function Backdrop() {
  return <div className="backdrop" />;
}

export default Backdrop;
