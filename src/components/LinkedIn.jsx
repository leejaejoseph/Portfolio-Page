import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function LinkedIn(props) {
    const [hover, setHover] = useState(true);
    const gltf = useGLTF('/src/assets/Portfolio-blender/linkedin.glb');
    return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;
}
  