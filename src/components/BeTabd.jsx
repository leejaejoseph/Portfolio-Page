import React from 'react';
import { useGLTF } from '@react-three/drei';

export function BeTabd(props) {
  const beTabd = useGLTF('/src/assets/be-tabd.glb');

  return (
    <primitive
      position={[55, 0, -44]}
      onClick={(e) => {
          e.stopPropagation();
          window.open('http://be-tab-d.youngjae.me/')
      }}
      object={beTabd.scene}
      {...props}
  />);
}