import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Resume(props) {
    const resume = useGLTF('/src/assets/resume.glb');
    const glass = resume.materials["Glass-Resume.002"];
      useFrame((state) => {
          const sine = (Math.sin(state.clock.getElapsedTime() * 3.1) + 1) / 2; 
          glass.emissiveIntensity = (1 - sine) * 0 + sine * .5;
      })
    return (
        <primitive
            onClick={(e) => {
                e.stopPropagation();
                window.open('/src/assets/Lee_Joseph_Resume.pdf');
            }}
            object={resume.scene}
            {...props}
        />);
}
  