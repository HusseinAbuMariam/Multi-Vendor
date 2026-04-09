import React, { useState } from "react";
import CategoryNav from "./CategoryNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="pt-[90px] transition-colors duration-300 bg-[var(--bg)] text-[var(--text)]">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center bg-[#132f48] text-white px-6 py-4 fixed top-0 left-0 right-0 z-[1000] shadow-md">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/ios-filled/50/ffffff/shopping-bag.png"
            alt="logo"
          />
          <h1 className="text-xl font-bold text-gray-300">
            Multi-Vendor
          </h1>
        </div>

        {/* Search (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center bg-white rounded-full px-3 py-2 w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-black px-2"
            />
            <button className="text-[#132f48] text-lg">🔍</button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("Home");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}>🏠 Home</Link>
          <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("features");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
              >
                 💡 Features
          </Link>
          <Link to="/wishlist">❤️ Wishlist</Link>
          <Link to="/contact">📞 Contact</Link>
          <Link to="/FAQ">❓ FAQ</Link>
          <Link to="/account">👤 Account</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[9999] bg-black/40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        {/* SIDE MENU */}
        <div
          className={`absolute top-0 left-0 h-full w-[260px] bg-[#132f48] text-white p-5 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={closeMenu} className="text-2xl">
              &times;
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={closeMenu}>🏠 Home</Link>
            <Link to="/features" onClick={closeMenu}>💡 Features</Link>
            <Link to="/wishlist" onClick={closeMenu}>❤️ Wishlist</Link>
            <Link to="/contact" onClick={closeMenu}>📞 Contact</Link>
            <Link to="/offers" onClick={closeMenu}>❓ FAQ</Link>
            <Link to="/account" onClick={closeMenu}>👤 Account</Link>
          </div>
        </div>
      </div>

      {/* CATEGORY NAV */}
      <CategoryNav />
    </div>
  );
};

export default Navbar;