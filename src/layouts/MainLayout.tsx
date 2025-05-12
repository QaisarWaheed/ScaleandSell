import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
