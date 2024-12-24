import React, { useRef } from 'react'
import './Info.css'
import nersc from '../../assets/NERSC_BLACK.svg'
import nsf from '../../assets/NSF_Small.svg'
import sbi from '../../assets/The_Science_behind_it_V.svg'
import ons from '../../assets/Our_next_steps_ahead_V.svg'
import mit from '../../assets/MIT.svg'
import neiCorps from '../../assets/NEI_Crops.svg'
import venture from '../../assets/Venture_Monitoring_Networks.svg'
import nerse from '../../assets/NERSE.svg'
import heroReverse from '../../assets/hero-video-cropped.mp4'
import { useNavigate } from 'react-router-dom'

const Info = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();

  const handleClick = () => {
    navigate('/science');
  };

  return (
    <div className='support'>
      {/* <div class="custom-shape-divider-top-1732571794">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div> */}
      
      {/* <div className='support-supported'>  
        Supported by
        <img src={nsf} alt=''></img>
        <img src={nersc} alt=''></img>
      </div> */}
        <br></br>
        
      <div className="science-section scroll-animate">
        <div className="shapes scroll-translate-animation">
          <img src={sbi} alt="" />
        </div>
        <div className="content">
          <h2 className='info-content-heading'>
          The <span className="highlight">Science</span> behind it
          </h2>
          
          <p className='info-content-description'>
            Atomic level dynamic simulations of protein structural <br></br>interactome provides unconventional grasp on <br></br>biomolecular systems.
          </p>
          
          <button className="btn info-btn" onClick={handleClick}>Learn More</button>
        </div>
      </div>

      <div className="next-steps-section scroll-animate">
        <div className="content">
          <h2 className='info-content-heading'>
          Our next <span className="highlight">steps</span> ahead
          </h2>
          <p className='info-content-description'>Simulating self-assembly of <br></br> biomolecular systems</p>
          <button className="btn info-btn" onClick={handleClick}>Explore</button>
        </div>

        <div className="info-media">
          {/* <img src={ons} alt="" /> */}
          <video src={heroReverse}  autoPlay
        loop
        muted
        playsInline></video>
        </div>
      </div>

      {/* <div className='Supported-section'>
        <p>Supported by</p>
        <br></br>
      </div>
      <div className="logo-slider">
      <div className="logo-slide-track">
      <a href='https://vms.mit.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={mit} alt="MIT logo" /></a>
        <a href='https://www.nersc.gov/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={nerse} alt="NERSE logo" /></a>
        <a href='https://icorps.mit.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={neiCorps} alt="NEI Crops logo" /></a>
        <a href='https://vmn.sites.northeastern.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={venture} alt="Venture Monitoring Networks logo" /></a>
        
        <a href='https://vms.mit.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={mit} alt="MIT logo" /></a>
        <a href='https://www.nersc.gov/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={nerse} alt="NERSE logo" /></a>
        <a href='https://icorps.mit.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={neiCorps} alt="NEI Crops logo" /></a>
        <a href='https://vmn.sites.northeastern.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={venture} alt="Venture Monitoring Networks logo" /></a>
        
        <a href='https://vms.mit.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={mit} alt="MIT logo" /></a>
        <a href='https://www.nersc.gov/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={nerse} alt="NERSE logo" /></a>
        <a href='https://icorps.mit.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={neiCorps} alt="NEI Crops logo" /></a>
        <a href='https://vmn.sites.northeastern.edu/' target="_blank" rel="noopener noreferrer"><img className="logo-slide" src={venture} alt="Venture Monitoring Networks logo" /></a>
      
      </div>
    </div> */}
    <div className="final-section">
      <div className="final-section-content">
        <h2>Ready to work at the forefront of <br></br>innovation?</h2>
        <p>Powering the world’s best creative<br></br> teams. From next-gen startups to <br></br>established enterprises.</p>
        <div className="input-container">
          <input type="email" className="input-box" ref={emailInputRef} placeholder="Enter email address" />
          <button className='btn' onClick={() => {
              navigate(`/contact?email=${emailInputRef.current.value}`);
          }}>Learn More</button>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Info