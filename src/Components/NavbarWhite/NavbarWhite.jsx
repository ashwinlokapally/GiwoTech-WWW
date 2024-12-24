import React, { useState } from 'react'
import './NavbarWhite.css'
import logoOutlineWhite from '../../assets/LogoOutline-black.png'
import logoTextWhite from '../../assets/LogoText-black-crop.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import { IoMenu, IoClose } from "react-icons/io5"

const NavbarWhite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='container-white'>
      <div className='logo-box'>
        <Link to={'/'}><img src={logoOutlineWhite} alt='' className='logo-outline'/></Link>
        <Link to={'/'}><img src={logoTextWhite} alt='' className='logo-text'/></Link>
      </div>
      <div className='menu-btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </div>
      <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
        <Link to={'/science'} className='link-black science-link' onClick={handleLinkClick}>Science</Link>
        <Link to={'/pipeline'} className='link-black' onClick={handleLinkClick}>Pipeline</Link>
        <Link to={'/news-updates'} className='link-black' onClick={handleLinkClick}>News</Link>
        <Link to={'/team'} className='link-black' onClick={handleLinkClick}>Team</Link>
        <Link to={'/contact'} className='link-black' onClick={handleLinkClick}>Contact</Link>
      </ul>
    </nav>
  )
}

export default NavbarWhite