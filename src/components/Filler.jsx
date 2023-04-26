import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Filler(props) {
    const capacitors = useGLTF('/src/assets/Portfolio-blender/capacitorfiller.glb');
    const eth = useGLTF('/src/assets/Portfolio-blender/eth.glb');
    return (
    <>
        <primitive object={capacitors.scene} {...props}/>
        <primitive object={eth.scene} {...props}/>
    </>
    );
}
