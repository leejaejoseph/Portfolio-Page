import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';


export function EsportsViewer(props) {
  const pos = useControls({x5: 55, y5: 0, z5:-44}) 
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/esportsviewer.glb');
  return <primitive position={[pos.x5, pos.y5, pos.z5]} onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}
