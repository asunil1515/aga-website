"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BagSimple } from "@phosphor-icons/react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useBag } from "../components/Bag";

interface NavbarProps {
  variant?: "transparent" | "opaque";
  showBagIcon?: boolean;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  variant = "transparent", 
  showBagIcon = false 
}) => {
  const { bag } = useBag();
  const [totalItems, setTotalItems] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setTotalItems(bag.reduce((total, item) => total + item.quantity, 0));
  }, [bag]);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    if (isClient) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isClient]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // If not client-side, return null
  if (!isClient) {
    return null;
  }

  const navbarClasses = [
    "navbar",
    variant === "opaque" ? "navbar-opaque" : "",
    isScrolled ? "scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navbarClasses}>
      <div className="container navbar-content">
        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Navigation Menu */}
        <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <button className="menu-close" onClick={toggleMenu}>
            <HiX />
          </button>
          <li><Link href="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link href="/#about" onClick={toggleMenu}>ABOUT</Link></li>
          <li><Link href="/#sermons" onClick={toggleMenu}>SERMONS</Link></li>
          <li><Link href="/donate" onClick={toggleMenu}>DONATE</Link></li>
          <li><Link href="/apparel" onClick={toggleMenu}>APPAREL</Link></li>
          <li><Link href="/#visit" onClick={toggleMenu}>VISIT</Link></li>

          {showBagIcon ? (
            <li className="relative">
              <Link href="/bag" className="social-icon bag-icon">
                <BagSimple size={32} />
                {totalItems > 0 && <span className="bag-item-count">{totalItems}</span>}
              </Link>
            </li>
          ) : (
            <div className="social-icons">
              <Link href="https://www.youtube.com/@amazinggraceassembly" target="_blank" className="social-icon">
                <AiOutlineYoutube size={26} className="text-2xl y1" />
              </Link>
              <Link href="https://www.instagram.com/amazinggraceig/" target="_blank" className="social-icon">
                <BsInstagram size={20} className="text-xl i1" />
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;