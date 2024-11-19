import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
        <Link to={'/'}><img src={logo} alt='' className='logo'/></Link>
        <ul>
            <Link to={'/science'} className='link'>Science</Link>
            <Link to={'/pipeline'} className='link'>Pipeline</Link>
            <Link to={'/news-updates'} className='link'>News&Updates</Link>
            <Link to={'/team'} className='link'>Team</Link>
            <Link to={'/contact'} className='link'>Contact</Link>
        </ul>
    </nav>
  )
}
export default Navbar