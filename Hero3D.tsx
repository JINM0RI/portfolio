"use client";
import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// Starfield particles
function Stars() {
  const ref = useRef<THREE.Points>(null!);
  const count = 3000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return arr;
  }, []);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 1.5;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f5ff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Floating wireframe torus knot
function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.2;
      wireRef.current.rotation.y = t * 0.3;
      wireRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <group position={[2.5, 0, 0]}>
      {/* Solid inner mesh */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 16]} />
        <MeshDistortMaterial
          color="#7b2fff"
          emissive="#3d0099"
          emissiveIntensity={0.5}
          distort={0.2}
          speed={2}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 16]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Grid floor
function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.getElapsedTime() * 0.5) % 3;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[40, 40, "#00f5ff", "#0a1a2e"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

// Floating data particles (smaller, colored dots around geometry)
function DataParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 3;
      arr[i * 3] = Math.cos(angle) * radius + 2.5;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff00aa"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

// Camera mouse parallax
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#ff00aa" intensity={1} />
      <Stars />
      <FloatingGeometry />
      <DataParticles />
      <GridFloor />
      <CameraRig />
    </Canvas>
  );
}
