//index.js is a starting point of our application
//code written here will be the first code executed in the browser

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//with this code we are telling tthat we wanna render our app html element into this element with root id
const root = ReactDOM.createRoot(document.getElementById("root")); //root element is displayed in index.html file
root.render(<App />);
