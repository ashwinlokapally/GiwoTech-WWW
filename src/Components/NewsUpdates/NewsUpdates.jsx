import React from 'react';
import './NewsUpdates.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ImageSlider from './ImageSlider'; 
import bardaNews from '../../assets/BARDA-NEWS.png';
import businesswireNews from '../../assets/BUSSINESSWIRE_NEWS.png';
import comingsoonNews from '../../assets/COMINGSOON-NEWS.png';


const NewsUpdates = () => {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/news');
    };
    const slides = [
        { url: bardaNews, title: "BARDA NEWS", link: "https://medicalcountermeasures.gov/newsroom/2024/ai-challenge/" },
        { url: businesswireNews, title: "BUSSINESS WIRE NEWS", link: "https://www.businesswire.com/news/home/20230607005549/en/Massachusetts-Innovation-Network-Announces-its-2023-Eddies-Finalists" },
        { url: comingsoonNews, title: "COMING SOON", link: "" },
      ];
      const containerStyles = {
        width: "900px",
        height: "500px",
        margin: "0 auto",
      };
      return (
        <div className='NewsUpdates-main'>
          <h1 className='NewsUpdates-heading'>NEWS</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
          <div className='NewsUpdates-Button'>
            <button className='btn' onClick={handleClick}>More News</button>
          </div>
          <div className='Updates-main'>
            <div className='Updates-heading'>
                <h1>UPDATES</h1>
            </div>
            <div className='Updates-container'>
                <div className='update-one update-container-box'>
                    <a href='https://www.linkedin.com/posts/activity-7205365734921678848-GaIk?utm_source=share&utm_medium=member_desktop' target='_blank' rel="noopener noreferrer">
                    <p>Imagination in Action summit at MIT CSAIL. Click here to read more.</p>
                    <p>June 7, 2024</p>
                    </a>
                </div>
                <div className='update-two update-container-box'>
                    <a href='https://www.linkedin.com/posts/massinnovationnetwork_eddies-activity-7119683321789337601-JWWk?utm_source=share&utm_medium=member_desktop' target='_blank' rel='noopener noreferrer'>
                    <p>GiwoTech at Massachusetts Innovation Network #Eddies. Click here to read more.</p>
                    <p>November 8, 2024</p>
                    </a>
                </div>
            </div>
          </div>
        </div>
      );
};
export default NewsUpdates;