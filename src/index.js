import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ContextFilm, {filmContextPopular} from "./ContextFilm";

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,

  document.getElementById("root")
);
reportWebVitals();
