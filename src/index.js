import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Home from 'Home.js';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
