import React from 'react'
import './Footer.css'
import { BsTwitterX } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© Copyright 2024, All Rights Reserved by Giwotech</p>
        <div className="social-links">
          <a href='https://x.com/GiwoTech' className="icon"><BsTwitterX/></a> 
          <a href='https://www.linkedin.com/company/giwotech/' className="icon"><BsLinkedin/></a> 
        </div>
        <div className="footer-links">
          <a href="" className="footer-link">Terms & Conditions</a>
          <a href="" className="footer-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer