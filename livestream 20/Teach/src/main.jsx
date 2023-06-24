import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CountProvider } from "./context/count.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
);
