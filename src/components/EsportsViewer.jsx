import React, {useState} from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function EsportsViewer(props) {
  const esportsViewer = useGLTF('/assets/esportsviewer.glb');
  const [hover, setHover] = useState(false);
  const titleMaterial = esportsViewer.scene.children[5].material

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
          window.open('https://leejaejoseph.github.io/esports-viewer/')
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      object={esportsViewer.scene}
      {...props}
  />);
}