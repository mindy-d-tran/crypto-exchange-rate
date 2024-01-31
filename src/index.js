import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";

//import BrowserROuter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

//wrap the App component with the Router component to enable the router features.
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
