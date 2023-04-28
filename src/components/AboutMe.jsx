import React, { useContext, useRef, useEffect, useState } from 'react';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useNavigate, useLocation } from 'react-router-dom';

export function AboutMe(props) {
  const [showModal, setShowModal] = useState(false);
  const aboutMe = useGLTF('/src/assets/Portfolio-blender/aboutme.glb');
  const pos = useControls({xa: 0, ya: 0, za:0})
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=> {
    if (location.pathname === '/') {
      setShowModal(false);
    }
}, [location])

  return (
  <>
    <primitive position={[11, 0, 52]}  onClick={(e)=>{e.stopPropagation(); setShowModal(!showModal); navigate('/about');}} object={aboutMe.scene}{...props}/>
  </>)}
