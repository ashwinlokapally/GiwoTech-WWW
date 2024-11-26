import { useState, useEffect, useCallback } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "44px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-40px",
  fontSize: "40px",
  color: "#E1EFFF",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-40px",
  fontSize: "40px",
  color: "#E1EFFF",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 8px",
  cursor: "pointer",
  fontSize: "20px",
  transition: "transform 0.2s ease",
  color: "#4E5B73",
};

const activeDotStyle = {
  ...dotStyle,
  color: "#E1EFFF",
};

const linkStyles = {
  display: 'block',
  width: '100%',
  height: '100%',
  cursor: 'pointer'
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let slideInterval;
    if (!isPaused) {
      slideInterval = setInterval(() => {
        goToNext();
      }, 3500);
    }
  
    return () => clearInterval(slideInterval);
  }, [goToNext, isPaused]);

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const handleClick = (e) => {
    e.preventDefault();
    const url = slides[currentIndex].link;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      style={sliderStyles}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <a 
        href={slides[currentIndex].link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyles}
        onClick={handleClick}
      >
        <div style={slideStylesWidthBackground}></div>
      </a>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={currentIndex === slideIndex ? activeDotStyle : dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;