import * as THREE from 'three';
import React, { useState } from 'react';
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

function CanvasCamera() {
    const [position, setPosition] = useState([180,120,200]);
    const [zoom, setZoom] = useState(20)
    const location = useLocation();
    
    useEffect(()=> {
        if (location.pathname === '/about') {
            setPosition([16, 200, 499]);
            setZoom(20)
        } else if (location.pathname === '/frameworks') {
            setPosition([0, 200, 12.8]);
            setZoom(15)
        } else{
            setPosition([180, 120, 200]);
            setZoom(20)
        }
    }, [location])

    return(
        <>
            <OrthographicCamera
                makeDefault
                zoom={zoom}
                near={1}
                far={2000}
                position={position}
                />
            <OrbitControls
                enablePan={true}
                enableRotate={false}
                enableZoom={false}
                mouseButtons={{
                    LEFT: THREE.MOUSE.PAN
                }}
                />
        </>
    )
}

export { CanvasCamera };