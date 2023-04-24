import React, { useContext, useRef, useEffect, useState } from 'react';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import Aboutpage from './aboutpage';

export function AboutMe(props) {
  const [showModal, setShowModal] = useState(false);
  const cameraRef = useRef();
  const aboutMe = useGLTF('/src/assets/Portfolio-blender/aboutme.glb');
  const pos = useControls({xa: 0, ya: 0, za:0})
  useFrame((state) => {
    if (showModal) {
      state.camera.position.lerp({ x: 0, y: 140, z: 200 }, 0.03)
      state.camera.lookAt(42, 0, 50)
      state.camera.updateProjectionMatrix()

    } else {
      state.camera.position.lerp({x: 180, y: 120, z: 200}, 0.03); // Reset camera position
      state.camera.lookAt(0, 0, 0);
      state.camera.updateProjectionMatrix()


    }
  })
  
  return (
  <>
    <primitive ref={cameraRef} position={[42, 0, 50]}  onClick={(e)=>{e.stopPropagation(); setShowModal(!showModal)}} object={aboutMe.scene}{...props}/>
    <OrbitControls enabled={showModal} enableRotate={false} />
    {showModal && <Html fullscreen>
      <div className="w-9/12 h-4/5 bg-white/50 rounded-2xl backdrop-blur-md">
        <div className='text-center'>
          <h1 className='font-Pathway-Extreme text-white pt-10 text-4xl'>ABOUT ME</h1>
        </div>
      </div>
      <button className='bg-white/50 w-14 h-14 rounded-full' onClick={(e)=>{setShowModal(!showModal)}}>x</button>
      </Html>}

  </>)}
