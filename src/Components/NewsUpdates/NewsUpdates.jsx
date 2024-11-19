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
        width: "1200px",
        height: "650px",
        margin: "0 auto",
      };
      return (
        <div className='NewsUpdates-main'>
          <h1 className='NewsUpdates-heading'>NEWS AND UPDATES</h1>
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
          </div>
        </div>
      );
};
export default NewsUpdates;


//   const handleOnClickNews = (id) => {
//     switch (id) {
//       case 1:
//         window.open("https://www.nytimes.com/spotlight/well-diabetes", "_blank");
//         break;
//       case 2:
//         window.open("https://www.medicalnewstoday.com/diabetes", "_blank");
//         break;
//       case 3:
//         window.open("https://www.bbc.com/news/topics/cx250pynpv4t", "_blank");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//           <div className="NewsUpdates-main">
//             <div className="heading">Latest News and more</div>
//             <div className="custom-slides">
//               <Carousel data-bs-theme="dark">
//                 <Carousel.Item>
//                   <img
//                     src="src\assets\BARDA-NEWS.png"
//                     className="d-block w-100"
//                     alt="..."
//                     onClick={() => handleOnClickNews(1)}
//                   />
//                   <Carousel.Caption>
//                     <h5>The New York Times</h5>
//                     <p>Latest news for Diabetes on The New York Times.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     src="src\assets\BUSSINESSWIRE_NEWS.png"
//                     className="d-block w-100"
//                     alt="..."
//                     onClick={() => handleOnClickNews(2)}
//                   />
//                   <Carousel.Caption>
//                     <h5>Medical News Today</h5>
//                     <p>Latest news for Diabetes on Medical News Today.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     src="src\assets\COMINGSOON-NEWS.png"
//                     className="d-block w-100"
//                     alt="..."
//                     onClick={() => handleOnClickNews(3)}
//                   />
//                   <Carousel.Caption>
//                     <h5>BBC News</h5>
//                     <p>Latest news for Diabetes on BBC News.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
//             </div>
//       </div>
//   );
// };

// export default NewsUpdates;

// // export default NewsUpdates


// {/*  */}