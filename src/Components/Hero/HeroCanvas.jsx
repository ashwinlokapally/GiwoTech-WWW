import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";

const isMobile = window.innerWidth < 768;
const NUM_CONES = isMobile ? 150 : 500;
const RADIUS = 3;

function SphereSystem({ isDarkRef, shouldAnimateRef }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const tempMatrix = useMemo(() => new THREE.Matrix4(), []);
  const tempPosition = useMemo(() => new THREE.Vector3(), []);

  const mouse = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });

  const targetRotationY = useRef(0);
  const currentRotationY = useRef(0);

  const timeRef = useRef(0);

  const spherePositions = useRef([]);
  const scatterPositions = useRef([]);

  // ================= GEOMETRY =================
  const geometry = useMemo(
    () => new THREE.ConeGeometry(0.20, 0.25, 32),
    []
  );

  // ================= MATERIAL =================
  const materialRef = useRef();

  if (!materialRef.current) {
    materialRef.current = new THREE.MeshStandardMaterial({
      color: "#5B647A",
      roughness: 0.45,
      metalness: 0.25,
      emissive: new THREE.Color("#000000"),
      emissiveIntensity: 0,
    });
  }

  const material = materialRef.current;

  // ================= THEME UPDATE =================
  useEffect(() => {
    if (!materialRef.current) return;

    const isDark = isDarkRef.current;

    if (isDark) {
      materialRef.current.color.set("#6B7280");
      materialRef.current.roughness = 1;
      materialRef.current.metalness = 0;

      materialRef.current.emissive.set("#2E1065");
      materialRef.current.emissiveIntensity = 0;
    } else {
      materialRef.current.color.set("#4E5B73");
      materialRef.current.roughness = 0.7;
      materialRef.current.metalness = 0.05;

      materialRef.current.emissive.setRGB(0, 0, 0);
      materialRef.current.emissiveIntensity = 0;
    }

    materialRef.current.needsUpdate = true;
  }, [isDarkRef]);

  // ================= FIBONACCI =================
  function fibonacciSphere(samples, radius) {
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < samples; i++) {
      const y = 1 - (i / (samples - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
    }

    return points;
  }

  // ================= INIT =================
  useEffect(() => {
    spherePositions.current = fibonacciSphere(NUM_CONES, RADIUS);

    scatterPositions.current = spherePositions.current.map((p) =>
      p.clone().add(
        new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        )
      )
    );

    if (!isMobile) {
      const handleMove = (e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }
  }, []);

  // ================= ANIMATION =================
  useFrame(() => {
    // 🔥 PAUSE CONTROL (NEW)
    if (!shouldAnimateRef.current) return;

    const mesh = meshRef.current;
    if (!mesh) return;

    const time = (timeRef.current += 0.01);
    const phase = Math.floor(time / 5) % 2;

    if (!isMobile) {
      const dx = mouse.current.x - prevMouse.current.x;
      const dy = mouse.current.y - prevMouse.current.y;

      const speed = Math.sqrt(dx * dx + dy * dy);

      targetRotationY.current += dx * speed * 8;
      currentRotationY.current +=
        (targetRotationY.current - currentRotationY.current) * 0.08;

      mesh.rotation.y = currentRotationY.current;

      const targetRotationX =
        -mouse.current.y * 0.3 + dy * speed * 2;

      mesh.rotation.x += (targetRotationX - mesh.rotation.x) * 0.1;
    }

    prevMouse.current.x = mouse.current.x;
    prevMouse.current.y = mouse.current.y;

    const scale = 1 + Math.sin(time * 0.8) * 0.015;
    mesh.scale.set(scale, scale, scale);

    for (let i = 0; i < NUM_CONES; i++) {
      let target =
        phase === 0
          ? scatterPositions.current[i]
          : spherePositions.current[i];

      if (!target) continue;

      mesh.getMatrixAt(i, tempMatrix);
      tempPosition.setFromMatrixPosition(tempMatrix);

      tempPosition.lerp(target, 0.01);

      const dist = tempPosition.distanceTo(target);
      const t = Math.min(dist / 3, 1);

      const shakeAmplitude =
        0.0015 + (0.008 - 0.0015) * t;

      const shakeSpeed = 2;

      tempPosition.x += Math.sin(time * shakeSpeed + i) * shakeAmplitude;
      tempPosition.y += Math.cos(time * shakeSpeed + i * 0.5) * shakeAmplitude;
      tempPosition.z += Math.sin(time * shakeSpeed + i * 0.3) * shakeAmplitude;

      dummy.position.copy(tempPosition);

      dummy.lookAt(0, 0, 0);
      dummy.rotateX(Math.PI / 2);

      const depthScale = 1 + tempPosition.z * 0.02;
      dummy.scale.set(depthScale, depthScale, depthScale);

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, NUM_CONES]} />
  );
}

// ================= CANVAS =================
export default function HeroCanvas({ isDark, shouldAnimate }) {
  const isDarkRef = useRef(isDark);
  const shouldAnimateRef = useRef(true);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    shouldAnimateRef.current = shouldAnimate;
  }, [shouldAnimate]);

  return (
    <Canvas
      style={{ width: "100%", height: "100%", display: "block" }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      {!isDark && (
        <fog attach="fog" args={["#E1EFFF", 4, 12]} />
      )}

      <ambientLight intensity={isDark ? 0.35 : 0.8} />

      {isDark ? (
        <>
          <directionalLight position={[3, 5, 3]} intensity={0.5} />
          <directionalLight position={[-4, -2, -3]} intensity={0.25} />
          <directionalLight position={[0, 0, -6]} intensity={0.35} />
        </>
      ) : (
        <>
          <directionalLight position={[4, 6, 4]} intensity={0.6} />
          <directionalLight position={[-6, 2, -4]} intensity={0.4} />
        </>
      )}

      <SphereSystem
        isDarkRef={isDarkRef}
        shouldAnimateRef={shouldAnimateRef}
      />
    </Canvas>
  );
}