import React, { useState } from 'react'
import './Team.css'
import { BsLinkedin } from 'react-icons/bs'
import ashwin from '../../assets/AshwinLokapally.png'
import razvan from '../../assets/RazvanMarinescu.png'
import arthur from '../../assets/ArthurHiller.png'
import azer from '../../assets/AzerKhan.png'
import michael from '../../assets/MichaelHagan.png'
import jodi from '../../assets/JodiHadden.png'
import petro from '../../assets/PetrosKotidis.png'

const Team = () => {
  return (
    <div className="team-section">
      <h1 className='team-heading'>MEET THE TEAM</h1>

      <p className='team-description'>
        Our leadership team brings together veteran biopharma executives,
        leading academics, and seasoned entrepreneurs to advance our mission
        of transforming therapeutic and materials design to improve human
        health and quality of life.
      </p>

      {/* Founding Team */}
      <h2 className='team-founding-heading'>FOUNDING TEAM</h2>

      <div className="team-grid founding-team">

        <FoundingMember
          name="Ashwin Lokapally"
          title="CEO & Co-Founder"
          imageUrl={ashwin}
          bio={"PhD in molecular biology \nwith 10+ years of experience in gene and protein functions."}
          linkedinUrl="https://www.linkedin.com/in/ashwinlokapally/"
        />

        <FoundingMember
          name="Razvan Marinescu"
          title="CTO & Co-Founder"
          imageUrl={razvan}
          bio={"Professor at UC Santa Cruz \nPhD in computer science with 10+ years of experience \nin AI/ML."}
          linkedinUrl="https://www.linkedin.com/in/razvan-valentin-marinescu-29b09442/"
        />

      </div>

      {/* Advisors */}
      <h2 className='team-advisors'>ADVISORS</h2>

      <div className="team-grid-advisors">

        <TeamMember
          name="Arthur Hiller"
          imageUrl={arthur}
          bio={"Formerly SVP, \nMillennium Pharma VP,\nMerck & Co. CEO,\ntwo VC-backed startups"}
          linkedinUrl="https://www.linkedin.com/in/arthurhiller/"
        />

        <TeamMember
          name="Petros Kotidis"
          imageUrl={petro}
          bio={"Fellow and commercialization advisor, Noble Reach Foundation\n Formerly CEO of Block Engineering,\n advisor at In-Q-Tel "}
          linkedinUrl="https://www.linkedin.com/in/petros-kotidis-322506/"
        />

        <TeamMember
          name="Michael Hagan"
          imageUrl={michael}
          bio={"Professor of Physics &\nComputational Biology\nBrandeis University"}
          linkedinUrl="https://www.linkedin.com/in/michael-hagan-a507056/"
        />

        <TeamMember
          name={"Jodi\nHadden-Perilla"}
          imageUrl={jodi}
          bio={"Professor of Chemistry &\nBiochemistry\nUniversity of Delaware"}
          linkedinUrl="https://www.linkedin.com/in/jodi-hadden-perilla-63445416a/"
        />

      </div>
    </div>
  );
}

function FoundingMember({ name, title, imageUrl, bio, linkedinUrl }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {

    const isTouch =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouch) {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <div
      className={`team-member ${isOpen ? "active" : ""}`}
      onClick={handleToggle}
    >

      <div className='default-content'>
        <p className='team-default-name'>{name}</p>

        <p className='team-default-title'>
          <b>{title}</b>
        </p>

        <img
          src={imageUrl}
          alt={name}
          className="founder-image"
        />
      </div>

      <div className="detailed-content">

        <p className='team-detailed-name'>{name}</p>

        <p className='team-detailed-title'>{title}</p>

        <p className='team-detailed-bio'>{bio}</p>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon"
          onClick={(e) => e.stopPropagation()}
        >
          <BsLinkedin />
        </a>

      </div>
    </div>
  );
}

function TeamMember({ name, title, imageUrl, bio, linkedinUrl }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {

    const isTouch =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouch) {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <div
      className={`team-member ${isOpen ? "active" : ""}`}
      onClick={handleToggle}
    >

      <div className='default-content'>

        <p className='team-default-name'>{name}</p>

        <p className='team-default-title'>
          <b>{title}</b>
        </p>

        <img
          src={imageUrl}
          alt={name}
          className="team-image"
        />

      </div>

      <div className="detailed-content">

        <p className='team-detailed-name'>{name}</p>

        <p className='team-detailed-title'>{title}</p>

        <p className='team-detailed-bio'>{bio}</p>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon"
          onClick={(e) => e.stopPropagation()}
        >
          <BsLinkedin />
        </a>

      </div>
    </div>
  );
}

export default Team