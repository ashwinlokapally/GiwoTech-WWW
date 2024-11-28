import React from 'react'
import './Science.css'
import scienceOne from '../../assets/section_one.gif'
import scienceTwo from '../../assets/section_two.gif'
import scienceThree from '../../assets/section_three.gif'

const Science = () => {
  return (
    <div className='science'>
        <div className='science-heading'>
            <h1>OUR SCIENCE</h1>
            <p>A digital twin platform from first principles using physics-based atomic-level <br/>molecular dynamics and proprietary AI. ‍We target viral proteins to develop first-in-class<br/> small molecules and vaccines.</p>
        </div>
        <div className='science-body'> 
            <div className='section-one'>
            <div className="science-content body-one">
                <h2>
                    ACCURATE FIRST PRINCIPLES<br/>  DYNAMIC MOLECULAR<br/>
                    SIMULATIONS.
                </h2>
                <br></br>
                <p className='science-descriptions'>
                    Molecular dynamics simulations provide us <br/>information on conformational changes <br/>over time.
                </p>
            </div>
            <div className="science-shapes">
                <img src={scienceOne} alt="" />
            </div>
            </div>

            <div className='section-two'>
            <div className="science-shapes">
                <img src={scienceTwo} alt="" />
            </div>
            <div className="science-content body-two">
                <h2>
                    ACCELERATED VACCINE<br/> AND THERAPEUTIC<br/> DISCOVERY
                </h2>
                <br></br>
                <p className='science-descriptions'>
                    Our proprietary models can identify <br/>compounds and design vaccines targeted <br/>at unfamiliar regions with maximum scores                
                </p>
            </div>
            
            </div>

            <div className='section-three'>
            <div className="science-content body-three">
                <h2>
                    ENRICHED SIMULATIONS<br/> THROUGH SOPHISTICATED<br/> MACHINE LEARNING.
                </h2>
                <br></br>
                <p className='science-descriptions'>
                    High predictive power and accuracy of our <br/>  physics-based models through active learning, <br/> deep learning and high performance computing.    
                </p>
            </div>
            <div className="science-shapes">
                <img src={scienceThree} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Science