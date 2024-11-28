import React from 'react'
import './NavbarWhite.css'
import logoOutlineWhite from '../../assets/LogoOutline-black.png'
import logoTextWhite from '../../assets/LogoText-black-crop.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container-white'>
        <div className='logo-box'>
        <Link to={'/'}><img src={logoOutlineWhite} alt='' className='logo-outline'/></Link>
        <Link to={'/'}><img src={logoTextWhite} alt='' className='logo-text'/></Link>
      </div>
        <ul>
            <Link to={'/science'} className='link'>Science</Link>
            <Link to={'/pipeline'} className='link'>Pipeline</Link>
            <Link to={'/news-updates'} className='link'>News</Link>
            <Link to={'/team'} className='link'>Team</Link>
            <Link to={'/contact'} className='link'>Contact</Link>
        </ul>
    </nav>
  )
}
export default Navbar