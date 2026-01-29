'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, ReactNode } from 'react';

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

export default function Scene3D({ 
  children, 
  cameraPosition = [0, 0, 5],
  enableControls = false 
}: Scene3DProps) {
  return (
    <Canvas 
      className="absolute inset-0"
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <PerspectiveCamera makeDefault position={cameraPosition} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0EA5E9" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A855F7" />
      <Suspense fallback={null}>
        {children}
      </Suspense>
      {enableControls && <OrbitControls enableZoom={false} />}
    </Canvas>
  );
}
