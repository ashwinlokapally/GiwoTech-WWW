import React from 'react'
import './Science.css'
import PDBViewer from '../../components/PDBViewer'

const Science = () => {
  return (
    <div className='science'>

      {/* ================= HERO ================= */}

      <div className='science-heading'>
        <h1>OUR SCIENCE</h1>

        <p className='science-intro'>
          A digital twin platform from first principles using physics-based
          atomic-level molecular dynamics and proprietary AI. We target viral
          proteins to develop first-in-class small molecules and vaccines.
        </p>
      </div>

      {/* ================= SECTION 1 ================= */}

      <section className='science-row scroll-animate'>

        <div className='science-model'>
          <div className='science-model-inner'>
            <PDBViewer
              file="/GiwoTech-WWW/models/1a3n.pdb"
              speed={0.08}
            />
          </div>
        </div>

        <div className='science-content'>
          <h2>
            ACCURATE FIRST PRINCIPLES
            <span>DYNAMIC MOLECULAR</span>
            <span>SIMULATIONS.</span>
          </h2>

          <p>
            Molecular dynamics simulations provide us information on
            conformational changes over time.
          </p>
        </div>

      </section>

      {/* ================= SECTION 2 ================= */}

      <section className='science-row reverse scroll-animate'>

        <div className='science-model'>
          <div className='science-model-inner'>
            <PDBViewer
              file="/GiwoTech-WWW/models/4ins.pdb"
              speed={0.1}
            />
          </div>
        </div>

        <div className='science-content'>
          <h2>
            ACCELERATED VACCINE
            <span>AND THERAPEUTIC</span>
            <span>DISCOVERY</span>
          </h2>

          <p>
            Our proprietary models can identify compounds and design
            vaccines targeted at unfamiliar regions with maximum scores.
          </p>
        </div>

      </section>

      {/* ================= SECTION 3 ================= */}

      <section className='science-row'>

        <div className='science-model'>
          <div className='science-model-inner'>
            <PDBViewer
              file="/GiwoTech-WWW/models/1bna.pdb"
              speed={0.06}
              zoom={1.35}
            />
          </div>
        </div>

        <div className='science-content'>
          <h2>
            ENRICHED SIMULATIONS
            <span>THROUGH SOPHISTICATED</span>
            <span>MACHINE LEARNING.</span>
          </h2>

          <p>
            High predictive power and accuracy of our physics-based
            models through active learning, deep learning and high
            performance computing.
          </p>
        </div>

      </section>

    </div>
  )
}

export default Science