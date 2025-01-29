"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/icons/PTCLOGO.png";
import { Menu, X } from "lucide-react"; // For mobile menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-opacity-60 bg-black px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {[
            "Home",
            "Developments",
            "Constructions",
            "About Us",
            "Contact Us",
          ].map((item, index) => (
            <Link
              key={index}
              href={`/${item.replace(" ", "")}`}
              className="text-[16px] text-white hover:text-slate-200 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-slate-100 flex items-center gap-2 rounded-lg shadow-lg">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z"
                fill="#eee"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                fill="#EEE"
              />
            </svg>
            <span>Introduction</span>
          </button>
          <button className="px-4 py-2 mainBackground rounded-lg shadow-lg">
            Enquire
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 py-4 space-y-4">
          {[
            "Home",
            "Developments",
            "Constructions",
            "About Us",
            "Contact Us",
          ].map((item, index) => (
            <Link
              key={index}
              href={`/${item.replace(" ", "")}`}
              className="text-white text-lg hover:text-slate-300 transition"
            >
              {item}
            </Link>
          ))}
          <button className="px-4 py-2 border border-slate-100 flex items-center gap-2 rounded-lg shadow-lg">
            <span>Introduction</span>
          </button>
          <button className="px-4 py-2 mainBackground rounded-lg shadow-lg">
            Enquire
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
