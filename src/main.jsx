import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Yuji+Hentaigana+Akari&display=swap"
        rel="stylesheet"
      />
    </div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
