import React from 'react'
import './FooterBlack.css'
import { BsTwitterX } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer-black">
      <div className="footer-content-black">
        <p className='footer-black-copyright'>© Copyright 2024, All Rights Reserved by Giwotech</p>
        <div className="social-links-black">
          <a href='https://x.com/GiwoTech' className="icon-black"><BsTwitterX/></a> 
          <a href='https://www.linkedin.com/company/giwotech/' className="icon-black"><BsLinkedin/></a> 
        </div>
        <div className="footer-links-black">
          <a href="" className="footer-link-black">Terms & Conditions</a>
          <a href="" className="footer-link-black">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer