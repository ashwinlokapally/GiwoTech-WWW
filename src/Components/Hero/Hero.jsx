import React, { useEffect, useState, useRef } from "react";
import './Hero.css'
import { useNavigate } from 'react-router-dom'
import nersc from '../../assets/NERSC_BLACK.svg'
import nsf from '../../assets/NSF_Small.svg'
import HeroCanvas from './HeroCanvas'

const Hero = () => {
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const heroRef = useRef(null);

  useEffect(() => {
    const updateTheme = () => {
      const hasDark = document.body.classList.contains("dark");
      setIsDark(hasDark);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    navigate('/science');
  };

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-canvas">
        {isDark && <div className="hero-glow" />}
        <HeroCanvas isDark={isDark} shouldAnimate={shouldAnimate} />
      </div>

      <div className="hero-overlay">
        <div className="hero-text">
          <h1>
            Next-gen digital twin platform using AI/ML and first principles
          </h1>

          <button className="hero-btn" onClick={handleClick}>
            Learn More
          </button>

          <div className="support-supported">
            Supported by
            <img src={nsf} alt='' />
            <img src={nersc} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;