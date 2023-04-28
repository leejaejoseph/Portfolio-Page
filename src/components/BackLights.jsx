import React, { useEffect, useState, useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper, Object3D } from 'three';
import { useControls } from 'leva';



export function BLight(props) {
    const camHe = useRef();
    useHelper(camHe, DirectionalLightHelper, 'green')
    const cameraCont = useControls({z:25, n:1, f:2000, x2:180, y2:120, z2:200, li:1, l1:1, l2:2, l3:3})
    

    return <directionalLight ref={camHe} intensity={cameraCont.li} color="#ffffff" position={[cameraCont.l1, cameraCont.l2, cameraCont.l3]} />
  ;}
