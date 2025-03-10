"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-5 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo or Branding - If you want to add a logo, place it here */}
        <div className="text-xl font-bold">Your Logo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm ml-auto">
          <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link href="/ministries" className="text-white hover:text-gray-300">Ministries</Link></li>
          <li><Link href="/donate" className="text-white hover:text-gray-300">Donate</Link></li>
          <li><Link href="/merch" className="text-white hover:text-gray-300">Merch</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
          <li><Link href="/login" className="text-white hover:text-gray-300">Login</Link></li>
        </ul>
 n
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden border-t shadow-md absolute w-full left-0 bg-white">
          <li><Link href="/about" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">About</Link></li>
          <li><Link href="/ministries" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">Ministries</Link></li>
          <li><Link href="/contact" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">Contact</Link></li>
        </ul>
      )}
          </div>
    </nav>
  );
};

export default Navbar;
