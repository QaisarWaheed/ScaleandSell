import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-[2rem] py-[1rem] flex justify-between items-center border-b">
      <div className="flex gap-8 items-center">
        <h1 className="font-bold text-primary text-[1.25rem]">StartupMarket</h1>
        <ul className="flex gap-6 hover:">
          <li className="text-secondary text-sm font-medium">Home</li>
          <li className="text-secondary text-sm font-medium">Listings</li>
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
