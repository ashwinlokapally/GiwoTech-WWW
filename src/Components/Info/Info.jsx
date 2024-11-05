import React from 'react'
import './Info.css'
import nersc from '../../assets/NERSC_BLACK.svg'
import nsf from '../../assets/NSF_Small.svg'
import bg from '../../assets/White_field_area.svg'

const Info = () => {
  return (
    <div className='support'>
        <div className='support-supported'>
            Supported by
            <img src={nsf} alt=''></img>
            <img src={nersc} alt=''></img>
        </div>
        <br></br>
        
        <div className="science-section">
        <div className="shapes">
          <img src="src\assets\The_Science_behind_it_V.svg" alt="" />
        </div>
        <div className="content">
          <h2>
            The <span className="highlight">Science</span> behind it
          </h2>
          
          <p>
            Atomic level dynamic simulations of protein structural interactome provides unconventional grasp on bio-molecular systems.
          </p>
          <br></br>
          <button className="btn">Learn More</button>
        </div>
    
      </div>

      <div className="next-steps-section">
        <div className="content">
          <h2>
            Our next <span className="highlight">steps</span> ahead
          </h2>
          <p>Simulating Self-assembly of Biomolecular Systems</p>
          <br></br>
          <button className="btn">Explore</button>
        </div>

        <div className="shapes">
          <img src="src\assets\Our_next_steps_ahead_V.svg" alt="" />
        </div>
      </div>
      
      <div className='Supported-section'>
        <p>Supported by</p>
        <br></br>
      </div>
      <div className='corousal'>

      </div>
      <div className='final-section'>
        <h2>Ready to Work at the forefront of
        innovation?</h2>
        <p>Powering the world’s best creative teams. From next-gen startups to established enterprises.</p>
      </div>
    </div>
    
  )
}

export default Info