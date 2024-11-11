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
      <div className="logo-slider">
      <div className="logo-slide-track">
        <img className="logo-slide" src='src/assets/MIT.svg' alt="MIT logo" />
        <img className="logo-slide" src='src/assets/NERSE.svg' alt="NERSE logo" />
        <img className="logo-slide" src='src/assets/NEI_Crops.svg' alt="NEI Crops logo" />
        <img className="logo-slide" src='src/assets/Venture_Monitoring_Networks.svg' alt="Venture Monitoring Networks logo" />
        <img className="logo-slide" src='src/assets/The_Engine.svg' alt="The Engine logo" />
        
        <img className="logo-slide" src='src/assets/MIT.svg' alt="MIT logo" />
        <img className="logo-slide" src='src/assets/NERSE.svg' alt="NERSE logo" />
        <img className="logo-slide" src='src/assets/NEI_Crops.svg' alt="NEI Crops logo" />
        <img className="logo-slide" src='src/assets/Venture_Monitoring_Networks.svg' alt="Venture Monitoring Networks logo" />
        <img className="logo-slide" src='src/assets/The_Engine.svg' alt="The Engine logo" />
      </div>
    </div>
    <div className="final-section">
      <div className="final-section-content">
        <h2>Ready to work at the forefront of <br></br>innovation?</h2>
        <p>Powering the world’s best creative teams. From<br></br> next-gen startups to established enterprises.</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email address" />
          <button className='btn'>Learn More</button>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Info