import Link from 'next/link'
import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer className="footer py-20 text-lg text-white">
      <div className="footer-content">
        {/* Footer Menu */}
        <ul className="footer-menu">
          <li><Link href="/" className="footer-link">HOME</Link></li>
          <li><Link href="/#about" className="footer-link">ABOUT</Link></li>
          <li><Link href="/#sermons" className="footer-link">SERMONS</Link></li>
          <li><Link href="/donate" className="footer-link">DONATE</Link></li>
          <li><Link href="/apparel" className="footer-link">APPAREL</Link></li>
          <li><Link href="/#visit" className="footer-link">VISIT</Link></li>
          <li>
            <a href="https://www.youtube.com/@amazinggraceassembly" target="_blank" rel="noopener noreferrer" className="social-icon">
              <AiOutlineYoutube className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/amazinggraceig/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <BsInstagram className="text-xl" />
            </a>
          </li>
        </ul>
        <div className='copyright'>©2025 by Amazing Grace Assembly</div>
      </div>
      {/* New styled line replacing the minus icon */}
      <div className="fminus-icon"></div>
    </footer>
  )
}
