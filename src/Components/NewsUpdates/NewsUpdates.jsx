import React from 'react';
import './NewsUpdates.css'
import { useNavigate } from 'react-router-dom'
import ImageSlider from './ImageSlider';

import newsData from '../../data/newsData';
import updatesData from '../../data/updatesData';

const NewsUpdates = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/news');
    };

    // derive slider data from newsData
    const slides = newsData.map((item) => ({
        title: item.title,
        text: item.shortText,
        link: item.link,
    }));

    return (
        <div className='NewsUpdates-main'>

            <h1 className='NewsUpdates-heading'>
                NEWS
            </h1>

            <div className='news-slider-wrapper'>
                <ImageSlider slides={slides} />
            </div>

            <div className='NewsUpdates-Button'>
                <button
                    className='btn'
                    onClick={handleClick}
                >
                    More News
                </button>
            </div>

            <div className='Updates-main'>

                <div className='Updates-heading'>
                    <h1>UPDATES</h1>
                </div>

                <div className='Updates-container'>

                    {updatesData.map((update, index) => (

                        <div
                            key={index}
                            className='update-container-box'
                        >

                            <a
                                href={update.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >

                                <p>{update.text}</p>

                                <p>{update.date}</p>

                            </a>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default NewsUpdates;