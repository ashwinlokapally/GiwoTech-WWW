import { useEffect, useRef, useState } from "react";

const PDBViewer = ({ file, speed = 0.1, zoom = 1 }) => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const frameRef = useRef(null);
  const observerRef = useRef(null);

  const [isDark, setIsDark] = useState(false);

  // ================= THEME =================
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.body.classList.contains("dark"));
    };

    updateTheme();

    const themeObserver = new MutationObserver(updateTheme);

    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => themeObserver.disconnect();
  }, []);

  // ================= VIEWER =================
  useEffect(() => {
    if (!window.$3Dmol || !containerRef.current) return;

    const container = containerRef.current;

    let active = false;
    let lastTime = 0;

    // ================= CLEAN OLD VIEWER =================
    if (viewerRef.current) {
      try {
        viewerRef.current.clear();
        viewerRef.current.render();

        const oldCanvas = container.querySelector("canvas");

        if (oldCanvas) {
          const gl =
            oldCanvas.getContext("webgl") ||
            oldCanvas.getContext("experimental-webgl");

          gl?.getExtension("WEBGL_lose_context")?.loseContext();
        }
      } catch (e) {
        console.warn("Previous viewer cleanup failed", e);
      }

      viewerRef.current = null;
    }

    // ================= CLEAR OLD OBSERVER =================
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // ================= BACKGROUND =================
    const bg = getComputedStyle(document.body)
      .getPropertyValue("--bg")
      .trim();

    // ================= VALID SIZE CHECK =================
    const isValidSize = () => {
      return (
        container &&
        container.clientWidth > 0 &&
        container.clientHeight > 0
      );
    };

    // ================= DISABLE ZOOM =================
    const handleWheel = (e) => {
      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    // ================= RESIZE =================
    const handleResize = () => {
      if (!viewerRef.current || !isValidSize()) return;

      try {
        viewerRef.current.resize();
        viewerRef.current.zoomTo();
        viewerRef.current.render();
      } catch (e) {
        console.warn("Resize failed", e);
      }
    };

    window.addEventListener("resize", handleResize);

    // ================= LOAD MODEL =================
    fetch(file)
      .then((res) => res.text())
      .then((data) => {

        // ================= WAIT FOR STABLE CONTAINER =================
        const initializeViewer = () => {

          if (!isValidSize()) {
            requestAnimationFrame(initializeViewer);
            return;
          }

          // ================= CREATE VIEWER ONLY AFTER SIZE EXISTS =================
          const viewer = window.$3Dmol.createViewer(container, {
            backgroundColor: bg,
          });

          viewerRef.current = viewer;

          // ================= MODEL =================
          viewer.addModel(data, "pdb");

          viewer.setStyle(
            {},
            {
              cartoon: {
                color: "spectrum",
                opacity: 0.95,
                thickness: window.innerWidth < 768 ? 0.3 : 0.6,
              },
            }
          );

          viewer.zoomTo();
          viewer.zoom(zoom);
          viewer.center();
          viewer.render();

          // ================= EXTRA STABILIZATION =================
          setTimeout(() => {
            handleResize();
          }, 200);

          // ================= ANIMATION =================
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

          // ================= INTERSECTION OBSERVER =================
          const observer = new IntersectionObserver(
            ([entry]) => {
              active = entry.isIntersecting;

              if (active && !frameRef.current) {
                animate();
              }
            },
            {
              threshold: 0.15,
            }
          );

          observer.observe(container);

          observerRef.current = observer;
        };

        initializeViewer();
      })
      .catch((err) => {
        console.error("Failed to load PDB:", err);
      });

    // ================= CLEANUP =================
    return () => {
      cancelAnimationFrame(frameRef.current);

      container.removeEventListener("wheel", handleWheel);

      window.removeEventListener("resize", handleResize);

      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (viewerRef.current) {
        try {
          viewerRef.current.clear();
          viewerRef.current.render();

          const canvas = container.querySelector("canvas");

          if (canvas) {
            const gl =
              canvas.getContext("webgl") ||
              canvas.getContext("experimental-webgl");

            gl?.getExtension("WEBGL_lose_context")?.loseContext();
          }
        } catch (e) {
          console.warn("Viewer cleanup failed", e);
        }

        viewerRef.current = null;
      }
    };
  }, [file, speed, isDark]);

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