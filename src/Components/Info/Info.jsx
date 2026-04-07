import "./Info.css";
import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

const Info = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();

  const viewerRef = useRef(null);
  const topViewerRef = useRef(null);

  // ✅ FIX: do NOT read theme during initial render
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    navigate("/science");
  };

  // ================= THEME OBSERVER =================
  useEffect(() => {
    const updateTheme = () => {
      const hasDark = document.body.classList.contains("dark");
      setIsDark(hasDark);
    };

    // 🔥 CRITICAL: sync AFTER mount
    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // ================= MAIN VIEWER SETUP =================
  useEffect(() => {
    if (!window.$3Dmol) return;

    const element = document.getElementById("pdb-viewer");
    const topElement = document.getElementById("pdb-viewer-top");

    if (!element && !topElement) return;

    const isMobile = window.innerWidth < 768;

    // 🔥 destroy old viewers
    if (viewerRef.current) {
      viewerRef.current.clear();
      viewerRef.current = null;
    }

    if (topViewerRef.current) {
      topViewerRef.current.clear();
      topViewerRef.current = null;
    }

    const getBg = () =>
      getComputedStyle(document.body)
        .getPropertyValue("--bg")
        .trim();

    const config = {
      backgroundColor: getBg(),
    };

    const viewer = element
      ? window.$3Dmol.createViewer(element, config)
      : null;

    const topViewer = topElement
      ? window.$3Dmol.createViewer(topElement, config)
      : null;

    viewerRef.current = viewer;
    topViewerRef.current = topViewer;

    let frameId = null;
    let topActive = false;
    let bottomActive = false;
    let lastTime = 0;
    let isTabActive = true;

    let topObserver = null;
    let bottomObserver = null;

    const isValidSize = (el) => {
      return el && el.clientWidth > 0 && el.clientHeight > 0;
    };

    const handleVisibility = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    fetch("/GiwoTech-WWW/models/1crn.pdb")
      .then((res) => res.text())
      .then((data) => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            // ===== BOTTOM VIEWER =====
            if (viewer) {
              viewer.addModel(data, "pdb");
              viewer.setStyle({}, {
                cartoon: {
                  color: "spectrum",
                  thickness: isMobile ? 0.3 : 0.6,
                  opacity: 0.95,
                },
              });
              viewer.zoomTo();
              viewer.center();

              if (isValidSize(element)) {
                viewer.render();
              }
            }

            // ===== TOP VIEWER =====
            if (topViewer) {
              topViewer.addModel(data, "pdb");
              topViewer.setStyle({}, {
                cartoon: {
                  color: "spectrum",
                  opacity: 0.9,
                  thickness: isMobile ? 0.3 : 0.6,
                },
              });
              topViewer.zoomTo();
              topViewer.center();

              if (isValidSize(topElement)) {
                topViewer.render();
              }
            }

            const animate = (time = 0) => {
              if (!isTabActive) return;

              if (!topActive && !bottomActive) {
                frameId = null;
                return;
              }

              if (time - lastTime < 33) {
                frameId = requestAnimationFrame(animate);
                return;
              }

              lastTime = time;

              if (topActive && topViewerRef.current && isValidSize(topElement)) {
                topViewerRef.current.rotate(0.04);
                topViewerRef.current.render();
              }

              if (bottomActive && viewerRef.current && isValidSize(element)) {
                viewerRef.current.rotate(0.12);
                viewerRef.current.render();
              }

              frameId = requestAnimationFrame(animate);
            };

            if (topElement) {
              topObserver = new IntersectionObserver(
                ([entry]) => {
                  topActive = entry.isIntersecting;

                  if ((topActive || bottomActive) && !frameId) {
                    animate();
                  }
                },
                { threshold: 0.4 }
              );

              topObserver.observe(topElement);
            }

            if (element) {
              bottomObserver = new IntersectionObserver(
                ([entry]) => {
                  bottomActive = entry.isIntersecting;

                  if ((topActive || bottomActive) && !frameId) {
                    animate();
                  }
                },
                { threshold: 0.4 }
              );

              bottomObserver.observe(element);
            }
          });
        }, 100);
      });

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", handleVisibility);

      if (topObserver) topObserver.disconnect();
      if (bottomObserver) bottomObserver.disconnect();
    };
  }, [isDark]);

  return (
    <div className="support">
      <div className="hero-info-separator"></div>

      <div className="science-section scroll-animate">
        <div className="shapes scroll-translate-animation">
          <div
            key={`top-${isDark}`}
            id="pdb-viewer-top"
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div>

        <div className="content">
          <h2 className="info-content-heading">
            The <span className="highlight">Science</span> behind it
          </h2>

          <p className="info-content-description">
            Atomic level dynamic simulations of protein structural <br />
            interactome provides unconventional grasp on <br />
            biomolecular systems.
          </p>

          <button className="btn info-btn" onClick={handleClick}>
            Learn More
          </button>
        </div>
      </div>

      <div className="next-steps-section scroll-animate">
        <div className="content">
          <h2 className="info-content-heading">
            Our next <span className="highlight">steps</span> ahead
          </h2>
          <p className="info-content-description">
            Simulating self-assembly of <br />
            biomolecular systems
          </p>
          <button className="btn info-btn" onClick={handleClick}>
            Explore
          </button>
        </div>

        <div className="info-media">
          <div
            key={`bottom-${isDark}`}
            id="pdb-viewer"
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div>
      </div>

      <div className="final-section">
        <div className="final-section-content">
          <h2>
            Ready to work at the forefront of <br />
            innovation?
          </h2>
          <p>
            Powering the world’s best creative <br />
            teams. From next-gen startups to <br />
            established enterprises.
          </p>
          <div className="input-container">
            <input
              type="email"
              className="input-box"
              ref={emailInputRef}
              placeholder="Enter email address"
            />
            <button
              className="btn"
              onClick={() => {
                navigate(`/contact?email=${emailInputRef.current.value}`);
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;