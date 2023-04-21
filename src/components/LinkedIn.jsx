import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function LinkedIn(props) {
    const linkedIn = useGLTF('/src/assets/Portfolio-blender/linkedin2.glb');
    const glass = linkedIn.materials["Glass-Linkedin"];
    
    useFrame((state) => {
          const t = (Math.sin(state.clock.getElapsedTime() * 3) + 1) / 2; 
          glass.emissiveIntensity = (1 - t) * 0.25 + t * .5;
      })
    return (
        <primitive
            onClick={(e) => {
                e.stopPropagation();
                window.open('https://www.linkedin.com/in/leejaejoseph/')
            }}
            object={linkedIn.scene}
            {...props}
        />);
}
  