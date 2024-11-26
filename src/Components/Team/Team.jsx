import React from 'react'
import './Team.css'
import { BsLinkedin } from 'react-icons/bs'

const Team = () => {
  return (
    <div className="team-section">
      <h1 className='team-heading'>MEET THE TEAM</h1>
      <p className='team-description'>
        Our leadership team brings together veteran biopharma executives, leading academics,<br></br> and seasoned entrepreneurs to advance our mission of transforming therapeutic and <br></br>materials design to improve human health and quality of life.
      </p>

      {/* Founding Team */}
      <h2 className='team-founding-heading'>FOUNDING TEAM</h2>
      <div className="team-grid founding-team">
      <TeamMember
          name="Ashwin Lokapally"
          title="CEO & Co-Founder"
          imageUrl="src\assets\AshwinLokapally.png"
          bio={"PhD in molecular biology \nwith 10+ years of experience in gene and protein functions."}
          linkedinUrl="https://www.linkedin.com/in/ashwinlokapally/"
        />
        <TeamMember
          name="Razvan Marinescu"
          title="CTO & Co-Founder"
          imageUrl="src\assets\RazvanMarinescu.png"
          bio={"Professor at UC Santa Cruz \nPhD in computer science with 10+ years of experience \nin AI/ML."}
          linkedinUrl="https://www.linkedin.com/in/razvan-valentin-marinescu-29b09442/"
        />
      </div>

      {/* Advisors */}
      <h2 className='team-advisors'>ADVISORS</h2>
      <div className="team-grid">
        <TeamMember
          name="Arthur Hiller"
          imageUrl="src\assets\ArthurHiller.png"
          bio={"Formerly SVP, \nMillennium Pharma VP,\nMerck & Co. CEO,\ntwo VC-backed startups"}
          linkedinUrl="https://www.linkedin.com/in/arthurhiller/"
        />
        <TeamMember
          name="Azer Khan"
          imageUrl="src\assets\AzerKhan.png"
          bio={"Senior Product Manager\nIBM Power Systems"}
          linkedinUrl="https://www.linkedin.com/in/azerkhan/"
        />
        <TeamMember
          name="Michael Hagan"
          imageUrl="src\assets\MichaelHagan.png"
          bio={"Professor of Physics &\nComputational Biology\nBrandeis University"}
          linkedinUrl="https://www.linkedin.com/in/michael-hagan-a507056/"
        />
        <TeamMember
          name="Jodi Hadden-Perilla"
          imageUrl="src\assets\JodiHadden.png"
          bio={"Professor of Chemistry &\nBiochemistry\nUniversity of Delaware"}
          linkedinUrl="https://www.linkedin.com/in/jodi-hadden-perilla-63445416a/"
        />        
      </div>
    </div>
  );
}

function TeamMember({ name, title, imageUrl,bio, linkedinUrl }) {
  return (
    <div className="team-member">
      <div className='default-content'>
        <p className='team-default-name'>{name}</p>
        <p className='team-default-title'><b>{title}</b></p>
        <img src={imageUrl} alt={name} className="team-image" />
      </div>
      
      <div className="detailed-content">
        <h3 className='team-detailed-name'>{name}</h3>
        <p className='team-detailed-title'>{title}</p>
        <p className='team-detailed-bio'>{bio}</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <BsLinkedin/>
        </a>
      </div>
    </div>
  );
}

export default Team