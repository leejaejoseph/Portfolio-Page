import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Plane(props) {
  const plane = useGLTF('/src/assets/plane.glb');
  const circuits = useGLTF('/src/assets/circuits.glb');
  return (
    <>
      <primitive object={plane.scene} {...props}/>
      <primitive object={circuits.scene} {...props}/>
    </>
  )
}