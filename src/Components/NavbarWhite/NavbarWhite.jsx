import React, { useState, useEffect } from 'react'
import './NavbarWhite.css'
import logoOutlineWhite from '../../assets/LogoOutline-black.png'
import logoTextWhite from '../../assets/LogoText-black-crop.png'
import logoOutlineDark from '../../assets/LogoOutline-white.png'
import logoTextDark from '../../assets/LogoText-white-crop.png'
import { Link } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5"
import SunIcon from '../../assets/sun.svg'
import MoonIcon from '../../assets/moon.svg'
import AutoIcon from '../../assets/auto.svg'

const NavbarWhite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 🔥 DEFAULT LIGHT (IMPORTANT CHANGE)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme")
    return saved ? saved : "light"
  })

  const [scrolled, setScrolled] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // ✅ Load saved theme (first load fallback = light)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme("light")
    }
  }, [])

  // ✅ Apply theme
  useEffect(() => {
    localStorage.setItem("theme", theme)

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (theme === "dark" || (theme === "auto" && systemDark)) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [theme])

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark =
    theme === "dark" ||
    (theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <nav className={`container-white ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <div className='logo-box'>
        <Link to={'/'}><img src={isDark ? logoOutlineDark : logoOutlineWhite} className='logo-outline'/></Link>
        <Link to={'/'}><img src={isDark ? logoTextDark : logoTextWhite} className='logo-text'/></Link>
      </div>

      {/* ACTIONS (ONLY MENU NOW) */}
      <div className={`nav-actions ${isMenuOpen ? "hidden" : ""}`}>
        <div className='menu-btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen
            ? <IoClose className="menu-icon" />
            : <IoMenu className="menu-icon" />
          }
        </div>
      </div>

      {/* NAV MENU */}
      <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>

        {/* 🔥 NEW: MENU HEADER (THEME + CLOSE) */}
        <div className="menu-header">

          {/* THEME TOGGLE (MOVED HERE) */}
          <div
            className="theme-toggle"
            onClick={() => {
              setTheme(prev =>
                prev === "auto" ? "light" :
                prev === "light" ? "dark" : "auto"
              )
            }}
          >
            {theme === "light" && <img src={SunIcon} alt="light" />}
            {theme === "dark" && <img src={MoonIcon} alt="dark" />}
            {theme === "auto" && <img src={AutoIcon} alt="auto" />}
          </div>

          {/* CLOSE BUTTON */}
          <div className='menu-btn' onClick={() => setIsMenuOpen(false)}>
            <IoClose className="menu-icon" />
          </div>

        </div>

        {/* LINKS */}
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