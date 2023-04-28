import React from 'react';
import { useGLTF } from '@react-three/drei';

export function EsportsViewer(props) {
  const esportsViewer = useGLTF('/src/assets/esportsviewer.glb');

  return (
    <primitive
      position={[55, 0, -44]}
      onClick={(e) => {
          e.stopPropagation();
          window.open('https://leejaejoseph.github.io/esports-viewer/')
      }}
      object={esportsViewer.scene}
      {...props}
  />);
}