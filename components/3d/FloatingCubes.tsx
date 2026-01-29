'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingCubes() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <FloatingCube key={i} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]} />
      ))}
    </>
  );
}

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const speed = Math.random() * 0.5 + 0.2;

  useFrame((state: { clock: { elapsedTime: number } }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.001;
    }
  });

  const size = Math.random() * 0.5 + 0.3;
  const color = Math.random() > 0.5 ? '#0EA5E9' : '#A855F7';

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

export function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 300;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  useFrame((state: { clock: { elapsedTime: number } }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#0EA5E9"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
