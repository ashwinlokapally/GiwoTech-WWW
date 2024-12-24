import { useState, useEffect, useCallback } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "44px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#4E5B73",
  color: "#0A0A0A",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "20px",
  boxSizing: "border-box",
};

const textContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "80%",
};

const titleStyles = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#0A0A0A",
  marginBottom: "10px",
};

const textStyles = {
  fontSize: "1.5rem",
  fontWeight: "normal",
  color: "#0A0A0A",
  lineHeight: "1.5",
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
  marginTop: "15px",
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
      }, 5000);
    }
  
    return () => clearInterval(slideInterval);
  }, [goToNext, isPaused]);

  const slideStylesWithBackground = {
    ...slideStyles,
    backgroundColor: slides[currentIndex].backgroundColor || "#E1EFFF",
  };

  const handleClick = (e) => {
    e.preventDefault();
    const url = slides[currentIndex].link;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
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
        href={slides[currentIndex].link || '#'} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyles}
        onClick={handleClick}
      >
        <div style={slideStylesWithBackground}>
          <div style={textContainerStyles}>
            <h2 style={titleStyles}>{slides[currentIndex].title}</h2>
            <p style={textStyles}>{slides[currentIndex].text}</p>
          </div>
        </div>
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