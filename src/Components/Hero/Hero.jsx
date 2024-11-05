import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>A next-gen digital twin platform from first principles and AI/ML simulations for biomedical, plant, and material applications</h1>
            <br></br>
            <button className='btn'>Learn More</button>
            
        </div>
        <div className='hero-media'>
            <iframe src="https://my.spline.design/clonercubebinarycopy-d555a954b86abfdaf5cc7e5e9f348c93/" frameborder="0" width="500px" height="550px"></iframe>
        </div>
    </div>
  )
}

export default Hero