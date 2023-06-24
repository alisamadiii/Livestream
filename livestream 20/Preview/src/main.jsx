import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ButtonProvider } from "./context/Button.context";
import Navbar from "./component/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ButtonProvider>
      <Navbar />
      <App />
    </ButtonProvider>
  </React.StrictMode>
);
