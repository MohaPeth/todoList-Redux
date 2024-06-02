import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Assurez-vous que ceci est importé

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Assurez-vous que ceci est défini ou commentez la ligne suivante si vous ne l'utilisez pas
reportWebVitals();
