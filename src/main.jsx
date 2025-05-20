import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Toaster position="top-right" />
      <AppRouter />
    </>
  </React.StrictMode>
);