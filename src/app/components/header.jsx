"use client";
import React from "react";
import NavLink from "./navlink";

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-center border-b-2 rounded pt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 ">
          <NavLink title="Home" href="/" />
          <NavLink title="Sales" href="sales" />
          <NavLink title="Credit" href="credit" />
          
        </div>
      </div>
    </header>
  );
}

export default Header;
