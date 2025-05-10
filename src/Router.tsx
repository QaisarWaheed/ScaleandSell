import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import JobListing from "./pages/JobListing";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/listings", element: <JobListing /> },
    ],
  },
]);

export default router;
