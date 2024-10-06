"use client";

import React from "react";
import { logoutUser } from "@/utils/api";
import { genericErrors } from "@/utils/constants";

const Header = () => {
  const handleLogout = () => {
    try {
      logoutUser();
    } catch (error) {
      alert((error as Error).message || genericErrors.logoutFailed);
    }
  };

  return (
    <header className="py-4 flex justify-between items-center">
      <h1 className="text-xl text-c-secondary hover:text-c-primary font-bold">
        NextJs Fullstack Boilerplate
      </h1>
      <button
        onClick={handleLogout}
        className="bg-c-secondary text-white px-3 py-1 rounded hover:bg-c-primary transition duration-300"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
