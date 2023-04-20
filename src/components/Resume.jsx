import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Resume(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/resume.glb');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}
