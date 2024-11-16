import React from 'react'
import './News.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000,

};

  return (
    <div className="carousel-container" style={{ width: '80%', margin: 'auto' }}>
            <Slider {...settings}>
                <div>
                    <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
                </div>
            </Slider>
        </div>
  )
}

export default News