import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


export function BeTabd(props) {
  const beTabd = useGLTF(`${import.meta.env.VITE_APP_BASE_URL}/src/assets/be-tabd.glb`);
  const [hover, setHover] = useState(false);
  const titleMaterial = beTabd.scene.children[4].material
  useFrame((state, delta) => {
    if (hover) {
      const emission = Math.min(1, titleMaterial.emissiveIntensity + delta * 2);
      titleMaterial.emissiveIntensity = emission;
      console.log()
    } else {
      const emission = Math.max(0, titleMaterial.emissiveIntensity - delta * 2);
      titleMaterial.emissiveIntensity = emission;
    }})



  return (
    <primitive
      onClick={(e) => {
          e.stopPropagation();
          window.open('http://be-tab-d.youngjae.me/')
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      object={beTabd.scene}
      {...props}
  />);
}