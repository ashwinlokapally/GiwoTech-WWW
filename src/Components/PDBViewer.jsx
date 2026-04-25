import { useEffect, useRef, useState } from "react";

const PDBViewer = ({ file, speed = 0.1 }) => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const frameRef = useRef(null);

  const [isDark, setIsDark] = useState(false);

  // ================= THEME =================
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.body.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // ================= VIEWER =================
  useEffect(() => {
    if (!window.$3Dmol || !containerRef.current) return;

    // cleanup old viewer
    if (viewerRef.current) {
      viewerRef.current.clear();
      viewerRef.current = null;
    }

    const bg = getComputedStyle(document.body)
      .getPropertyValue("--bg")
      .trim();

    const viewer = window.$3Dmol.createViewer(containerRef.current, {
      backgroundColor: bg,
    });

    viewerRef.current = viewer;

    let active = false;
    let lastTime = 0;

    const isValidSize = () =>
      containerRef.current &&
      containerRef.current.clientWidth > 0 &&
      containerRef.current.clientHeight > 0;

    // ================= 🔥 DISABLE ZOOM ONLY =================
    const handleWheel = (e) => {
      e.preventDefault(); // stops zoom
    };

    containerRef.current.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    // ================= LOAD MODEL =================
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        viewer.addModel(data, "pdb");

        viewer.setStyle({}, {
          cartoon: {
            color: "spectrum",
            opacity: 0.95,
            thickness: window.innerWidth < 768 ? 0.3 : 0.6,
          },
        });

        viewer.zoomTo();
        viewer.center();

        if (isValidSize()) viewer.render();

        const animate = (time = 0) => {
          if (!active) {
            frameRef.current = null;
            return;
          }

          if (time - lastTime < 33) {
            frameRef.current = requestAnimationFrame(animate);
            return;
          }

          lastTime = time;

          if (viewerRef.current && isValidSize()) {
            viewerRef.current.rotate(speed);
            viewerRef.current.render();
          }

          frameRef.current = requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
          ([entry]) => {
            active = entry.isIntersecting;

            if (active && !frameRef.current) {
              animate();
            }
          },
          { threshold: 0.4 }
        );

        observer.observe(containerRef.current);
      });

    return () => {
      cancelAnimationFrame(frameRef.current);

      // 🔥 cleanup wheel listener
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [file, isDark]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default PDBViewer;