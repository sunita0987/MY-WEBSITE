import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import profileImg from "../assets/images/nabar.jpg"
const Navbar = () => {
  return (
    <nav className="bg-red-300 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img
            src={profileImg}
            alt="Sunita"
            className="w-20 h-10 rounded-xl"
          />
          <div className="space-x-6 hidden md:block">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
