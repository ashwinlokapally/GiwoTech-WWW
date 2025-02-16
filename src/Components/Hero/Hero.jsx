import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
import nersc from '../../assets/NERSC_BLACK.svg'
import nsf from '../../assets/NSF_Small.svg'
import heroReverse from '../../assets/hero-video-try.mp4'

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/science');
  };
  
  return (
    <div className='hero container'>
      <div className='hero-flexbox'>
        <div className='hero-text'>
            <h1>A next-gen digital twin platform from first principles and AI/ML simulations for biomedical, plant, and material applications</h1>
            <br></br>
            <button className='hero-btn' onClick={handleClick}>Learn More</button>
            <div className='support-supported'>  
              Supported by
              <img src={nsf} alt=''></img>
              <img src={nersc} alt=''></img>
            </div>
        </div>
        <div className='hero-media'>
{/*           <iframe width="1024" height="540" margin-bottom="-20px" className='hero-3d-model' allowfullscreen src="https://v3d.net/16e7"></iframe> */}
            {/* <iframe src="https://my.spline.design/clonercubebinarycopy-d555a954b86abfdaf5cc7e5e9f348c93/" frameborder="0" width="500px" height="550px"></iframe> */}
            {/* <img src="src\assets\CriticalNucleus_dimer-trimer-new1-ezgif.com-censor.gif" alt="" /> */}
            <video src={heroReverse}  autoPlay
        loop
        muted
        playsInline></video>
        </div>
      </div>      
    </div>
    
  )
}

export default Hero
