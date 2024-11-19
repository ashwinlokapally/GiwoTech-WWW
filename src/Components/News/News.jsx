import React from 'react'
import './News.css'
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className='News-main'>
      <h4 className='News-heading'>NEWS</h4>
      <div class="cards-container container flex" id="cards-container">
        <a 
          href="https://medicalcountermeasures.gov/newsroom/2024/ai-challenge/"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">BARDA DRIVe</h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
            GiwoTech's cutting-edge AI models for accelerating precision therapeutics discovery through viral modeling caught the attention of BARDA (Biomedical Advanced Research and Development Authority).<br></br> Our innovative approach to model viruses aligns perfectly with BARDA's mission to enhance health security preparedness and response. This recognition from BARDA validates our commitment to leveraging AI for groundbreaking advancements in medical countermeasure development.
            </p>
          </div>
        </a>
        
        <a 
          href="https://www.businesswire.com/news/home/20230607005549/en/Massachusetts-Innovation-Network-Announces-its-2023-Eddies-Finalists"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">Massachusetts Innovation Network</h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
            Massachusetts Innovation Network has announced the finalists for its signature innovation competition, The Eddies. Finalists will have the chance to participate in this 5-month, no-cost, no-equity innovation-boosting program that includes high-touch, tailor-made mentoring, connections to funding resources, and visibility opportunities. <br></br>
            </p>
          </div>
        </a>

        <a 
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">
              Lorem
            </h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem magnam assumenda quas id, 
              illum voluptates ad, repellat cupiditate asperiores adipisci totam libero molestiae obcaecati ut. 
              Quas asperiores ullam necessitatibus animi.
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default News