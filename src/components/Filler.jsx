import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Filler(props) {
    const capacitors = useGLTF('/assets/capacitors.glb');
    const ethereum = useGLTF('/assets/ethereum.glb');
    const heatsinks = useGLTF('/assets/heatsinks.glb');
    const cubenetwork = useGLTF('/assets/cubenetwork.glb');
    return (
    <>
        <primitive object={capacitors.scene} {...props}/>
        <primitive object={ethereum.scene} {...props}/>
        <primitive object={heatsinks.scene} {...props}/>
        <primitive object={cubenetwork.scene} {...props}/>
    </>
    );
}
