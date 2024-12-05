import React from "react";
import NavbarTs from "./Type";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 py-4 shadow-lg">
    <div className="w-4/5 mx-auto flex items-center justify-between">
      <h1 className="text-3xl font-bold text-white">
        Tech Store
      </h1>
      <NavbarTs />
    </div>

    <div className="border-t border-gray-600 mt-2">
    </div>
  </header>
  );
};

export default Navbar;
