import React, { useContext, useRef, useEffect, useState } from 'react';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useNavigate, useLocation } from 'react-router-dom';

export function AboutMe(props, onClose) {
  const [showModal, setShowModal] = useState(false);
  const aboutMe = useGLTF('/src/assets/Portfolio-blender/aboutme.glb');
  const pos = useControls({xa: 0, ya: 0, za:0})
  const navigate = useNavigate();
  const location = useLocation();

  // useFrame((state) => {
  //   if (showModal) {
  //     state.camera.position.lerp({ x: 0, y: 140, z: 200 }, 0.03)
  //     state.camera.lookAt(42, 0, 50)
  //     state.camera.updateProjectionMatrix()
  //   }
  // })

  useEffect(()=> {
    if (location.pathname === '/') {
      setShowModal(false);
    }
}, [location])

  return (
  <>
    <primitive position={[42, 0, 50]}  onClick={(e)=>{e.stopPropagation(); setShowModal(!showModal); navigate('/about');  onClose();}} object={aboutMe.scene}{...props}/>
  </>)}
