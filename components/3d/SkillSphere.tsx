'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import * as THREE from 'three';

interface SkillSphereProps {
  skill: string;
  position: [number, number, number];
  color: string;
}

export function SkillSphere({ skill, position, color }: SkillSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state: { clock: { elapsedTime: number }; camera: { position: THREE.Vector3 } }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Center position={[0, 0, 0.6]}>
        <Text
          ref={textRef}
          fontSize={0.15}
          color={color}
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {skill}
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </Text>
      </Center>
    </group>
  );
}
