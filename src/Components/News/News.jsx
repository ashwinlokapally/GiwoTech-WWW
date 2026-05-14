import React from 'react'
import './News.css'
import { useNavigate } from 'react-router-dom';
import newsData from '../../data/newsData';

const News = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/news-updates');
  };

  return (
    <div className='News-main'>

      <div className="back-button-container">
        <button className="back-btn" onClick={handleBack}>
          ← Back to News & Updates
        </button>
      </div>

      <h4 className='News-heading'>NEWS</h4>

      <div className="cards-container container flex" id="cards-container">

        {newsData.map((news, index) => (
          <a
            key={index}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >

            <div
              className="card-header"
              width="40px"
              height="50px"
              id="news-img"
            ></div>

            <div className="card-content">

              <h3 className="news-title">
                {news.title}
              </h3>

              <div className="custom-divider"></div>

              <p className="news-desc" id="news-desc">

                {news.fullText
                  .split('\n\n')
                  .map((paragraph, i) => (
                    <React.Fragment key={i}>
                      {paragraph}
                      <br />
                      <br />
                    </React.Fragment>
                  ))
                }

              </p>

            </div>

          </a>
        ))}

      </div>

    </div>
  )
}

export default News