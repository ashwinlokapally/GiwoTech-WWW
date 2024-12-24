import React, { useState } from 'react'
import './Navbar.css'
import logoOutlineWhite from '../../assets/LogoOutline-white.png'
import logoTextWhite from '../../assets/LogoText-white-crop.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import { IoMenu, IoClose } from "react-icons/io5"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='container'>
      <div className='logo-box'>
        <Link to={'/'}><img src={logoOutlineWhite} alt='' className='logo-outline'/></Link>
        <Link to={'/'}><img src={logoTextWhite} alt='' className='logo-text'/></Link>
      </div>
      <div className='menu-btn-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </div>
      <ul className={isMenuOpen ? 'nav-links-white active' : 'nav-links-white'}>
        <Link to={'/science'} className='link science-link' onClick={handleLinkClick}>Science</Link>
        <Link to={'/pipeline'} className='link' onClick={handleLinkClick}>Pipeline</Link>
        <Link to={'/news-updates'} className='link' onClick={handleLinkClick}>News</Link>
        <Link to={'/team'} className='link' onClick={handleLinkClick}>Team</Link>
        <Link to={'/contact'} className='link' onClick={handleLinkClick}>Contact</Link>
      </ul>
    </nav>
  )
}

export default Navbar