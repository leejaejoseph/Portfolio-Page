import React, { useEffect, useState, useRef } from 'react';
import { useGLTF, useCubeTexture } from '@react-three/drei';

export function Plane(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/plane1.glb');
    return <primitive object={gltf.scene} {...props}/>;
  // const gltf = useGLTF('/src/assets/Portfolio-blender/plane1.glb');
  // const cubeTexture = useCubeTexture(
  //   [
  //     'src/assets/Portfolio-blender/px.png',
  //     'src/assets/Portfolio-blender/nx.png',
  //     'src/assets/Portfolio-blender/py.png',
  //     'src/assets/Portfolio-blender/ny.png',
  //     'src/assets/Portfolio-blender/pz.png',
  //     'src/assets/Portfolio-blender/nz.png',
  //   ],
  //   { path: 'src/assets/Portfolio-blender/' }
  // );
  
  // const meshRef = useRef();
  
  // return (
  //   <group ref={meshRef} {...props}>
  //     <mesh geometry={gltf.scene.children[0].geometry}>
  //       <meshStandardMaterial 
  //         envMap={cubeTexture} 
  //         metalness={1} 
  //         roughness={0} 
  //       />
  //     </mesh>
  //   </group>
  // );
}