import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

export function AboutMe(props) {
  const [hover, setHover] = useState(true);
  const aboutMe = useGLTF('/src/assets/Portfolio-blender/aboutme.glb');
  const pos = useControls({xa: 0, ya: 0, za:0})

  return (
  <>
    <primitive position={[pos.xa, pos.ya, pos.za]}  onClick={(e)=>{e.stopPropgration(); }} {...props}/>
  </>)}
