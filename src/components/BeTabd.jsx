import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';


export function BeTabd(props) {
  
  const pos = useControls({x4: 55, y4: 0, z4:-44})
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/be-tabd.glb');
  return <primitive position={[pos.x4, pos.y4, pos.z4]} onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}
