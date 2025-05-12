import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 max-w-[1400px] mx-auto left-0 px-[2rem] py-[1rem] flex justify-between items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex gap-8 items-center">
        <h1 className="font-bold text-primary text-[1.25rem]">StartupMarket</h1>
        <ul className="flex gap-6 hover:">
          <li className="text-secondary text-sm font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-secondary text-sm font-medium">
            <Link to="/listings">Listings</Link>
          </li>
          <li className="text-secondary text-sm font-medium">How It Works</li>
          <li className="text-secondary text-sm font-medium">About</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="border font-semibold rounded-lg px-3 py-[6px]"
        >
          Log In
        </Link>
        <Link
          to="/register"
          className="bg-primary font-semibold text-white rounded-lg px-3 py-1"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
