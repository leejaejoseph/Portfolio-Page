import React, { useEffect, useRef, useState } from 'react';
import { SpotLight, useGLTF } from '@react-three/drei';
import { Object3D } from 'three';


export function Languages(props) {
    const [hover, setHover] = useState(false);
    const gltf = useGLTF('/src/assets/Portfolio-blender/language1.glb');
    const {position} = gltf.scene;

    console.log('reflection');
    return (
      <>
        <SpotLight
  castShadow
  position={[position.x, position.y + 50, position.z]}
  target={gltf.scene}
  penumbra={1}
  distance={100}
  angle={Math.PI / 8} // make the cone wider
  intensity={hover ? 0.75 : 0.25}
  opacity={0.2}
/>
        <primitive
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          object={gltf.scene}
          {...props}
        />
      </>
    );
  }