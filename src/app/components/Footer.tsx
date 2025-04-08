import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer className="footer py-20 text-lg text-white">
      <div className="footer-content">
        {/* Footer Menu */}
        <ul className="footer-menu">
          <li><a href="/" className="footer-link">HOME</a></li>
          <li><a href="/#about" className="footer-link">ABOUT</a></li>
          <li><a href="/#sermons" className="footer-link">SERMONS</a></li>
          <li><a href="/donate" className="footer-link">DONATE</a></li>
          <li><a href="/apparel" className="footer-link">APPAREL</a></li>
          <li><a href="/#visit" className="footer-link">VISIT</a></li>
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
