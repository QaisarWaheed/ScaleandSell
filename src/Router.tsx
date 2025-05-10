import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },

  { path: "/register", element: <Register></Register> },
]);

export default router;
