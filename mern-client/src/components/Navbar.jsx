import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaBars, FaTimes } from "react-icons/fa"; // Correct import path for icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard/" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header  className={`w-full transition-all ease-in duration-300 ${isSticky ? "sticky top-0  bg-blue-300" : "bg-transparent"}` }>
      <nav className={`py-4 lg:px-24 px-4 bg-teal-100`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Word Shelf
          </Link>

          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBars className="w-5 hover:text-blue-700" /> 
            </button>
          </div>

          {/* menu btn for the mobile devices */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5 text-black" />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>

        {/* Add the rest of your nav items and menu toggle logic here */}

        {/* navItems for smallDevices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 text-white ${isMenuOpen? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
