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
      <h2>FOUNDING TEAM</h2>
      <div className="team-grid founding-team">
      <TeamMember
          name="Ashwin Lokapally"
          title="CEO & Co-Founder"
          imageUrl="src\assets\AshwinLokapally.png"
          bio="PhD in molecular biology with over a decade of experience in gene and protein functions."
          linkedinUrl="https://www.linkedin.com/in/ashwinlokapally/"
        />
        <TeamMember
          name="Razvan Marinescu"
          title="CTO & Co-Founder"
          imageUrl="src\assets\RazvanMarinescu.png"
          bio="Expert in AI-driven drug discovery with a focus on computational biology."
          linkedinUrl="https://www.linkedin.com/in/razvan-valentin-marinescu-29b09442/"
        />
      </div>

      {/* Advisors */}
      <h2>ADVISORS</h2>
      <div className="team-grid">
        <TeamMember
          name="Arthur Hiller"
          title="Business"
          imageUrl="src\assets\ArthurHiller.png"
          bio="Seasoned business strategist with expertise in biopharma startups."
          linkedinUrl="https://www.linkedin.com/in/arthurhiller/"
        />
        <TeamMember
          name="Michael Hagan"
          title="Scientific"
          imageUrl="src\assets\MichaelHagan.png"
          bio="Renowned scientist with groundbreaking research in molecular dynamics."
          linkedinUrl="https://www.linkedin.com/in/michael-hagan-a507056/"
        />
        <TeamMember
          name="Jodi Hadden"
          title="Scientific"
          imageUrl="src\assets\JodiHadden.png"
          bio="Expert in clinical trials and biostatistics."
          linkedinUrl="https://www.linkedin.com/in/jodi-hadden-perilla-63445416a/"
        />
        <TeamMember
          name="Azer Khan"
          title="Business"
          imageUrl="src\assets\AzerKhan.png"
          bio="Business leader with a focus on scaling biopharma companies."
          linkedinUrl="https://www.linkedin.com/in/azerkhan/"
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
      
      {/* Detailed Content (hidden by default) */}
      <div className="detailed-content">
        <h3 className='team-detailed-name'>{name}</h3>
        <p className='team-detailed-title'>{title}</p>
        <p>{bio}</p>
        {/* LinkedIn Icon */}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <BsLinkedin/>
        </a>
      </div>
    </div>
  );
}

export default Team