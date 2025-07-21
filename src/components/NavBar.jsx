import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import profileImg from "../assets/images/nabar.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-red-300 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img src={profileImg} alt="Sunita" className="w-20 h-10 rounded-xl" />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="space-x-6 hidden md:flex">
            <NavLinks />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2">
            <NavLinks isMobile={true} onClickLink={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};
const NavLinks = ({ isMobile = false, onClickLink = () => {} }) => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold block"
      : "text-gray-700 hover:text-blue-600 block";

  return (
    <>
      <NavLink to="/" className={linkClasses} onClick={onClickLink}>
        Home
      </NavLink>
      <NavLink to="/about" className={linkClasses} onClick={onClickLink}>
        About
      </NavLink>
      <NavLink to="/skills" className={linkClasses} onClick={onClickLink}>
        Skills
      </NavLink>
      <NavLink to="/projects" className={linkClasses} onClick={onClickLink}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={linkClasses} onClick={onClickLink}>
        Contact
      </NavLink>
    </>
  );
};

export default Navbar;
