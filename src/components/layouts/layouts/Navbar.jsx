"use client";
import { useState } from "react";

import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header className="sticky top-0 left-0 z-50 py-4 px-32 flex items-center justify-between border-b w-full bg-white shadow-md">
      <Link to="/" className="text-2xl font-serif text-pink-600 flex">
        <img className="w-[50px]" src="../src/assets/logo/logo.png" alt="" />
        <p className="m-auto">SkinBeauty</p>
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="hover:text-primary">
          HOME
        </Link>
        <Link to="/makeup" className="hover:text-primary">
          SNIK CARE
        </Link>
        <Link to="/aboutus" className="hover:text-primary">
          ABOUT US
        </Link>
      </nav>
      {/* Account & Cart */}
      <div className="flex items-center gap-4">
        <Link href="/account" className="hover:text-primary">
          <span className="sr-only">Account</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5">
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        </Link>

        <Link
          href="/cart"
          className="flex items-center gap-2 hover:text-primary">
          <span>$0.00</span>
          <FaShoppingCart />
          <span className="inline-flex items-center justify-center w-4 h-4 text-xs bg-primary text-white rounded-full">
            0
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-primary">
              HOME
            </Link>
            <Link to="/makeup" className="hover:text-primary">
              MAKEUP
            </Link>
            <Link to="/skincare" className="hover:text-primary">
              SKIN CARE
            </Link>
            <Link to="/aboutus" className="hover:text-primary">
              ABOUT US
            </Link>
            <Link to="/contact" className="hover:text-primary">
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </Header>
  );
}
