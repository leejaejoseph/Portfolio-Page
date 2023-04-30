import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Plane(props) {
  const plane = useGLTF('/assets/plane.glb');
  const circuits = useGLTF('/assets/circuits.glb');
  return (
    <>
      <primitive object={plane.scene} {...props}/>
      <primitive object={circuits.scene} {...props}/>
    </>
  )
}