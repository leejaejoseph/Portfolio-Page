import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

export function AboutMe(props) {
  const aboutMe = useGLTF('/src/assets/aboutme.glb');
  const navigate = useNavigate();

  return (
    <primitive 
      position={[11, 0, 52]}
      onClick={(e) => {
        e.stopPropagation();
        navigate('/about');
      }}
      object={aboutMe.scene}
      {...props}
  />
)}
