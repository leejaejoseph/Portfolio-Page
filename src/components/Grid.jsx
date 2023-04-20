import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Grid(props) {
    const gltf = useGLTF('/src/assets/Portfolio-blender/grid.glb');
    return <primitive object={gltf.scene} {...props}/>;
}
