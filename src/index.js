import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { homeRoute } from "./components/routes/HomeRoute";
import { aboutRoute } from "./components/routes/AboutRoute";
import { landingPageRoute } from "./components/routes/LandingPageRoute";

const router = createBrowserRouter([homeRoute, aboutRoute, landingPageRoute]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
