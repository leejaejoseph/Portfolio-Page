import { useState, useRef } from 'react';
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { useLocation } from "react-router-dom";
import { useControls } from 'leva';
import { useEffect } from 'react';

function RCamera() {
    const [position, setPosition] = useState([180,120,200]);
    const location = useLocation();
    const cameraRef = useRef();
    const pol = useControls({ x2:120, y2:121, z2:140 })


    useEffect(()=> {
        console.log(position);
        if (location.pathname === '/about') {
            console.log(location);
            setPosition([16, 405, 499]);
        } else {
            setPosition([180, 120, 200]);
        }
    }, [location, pol])

    return(
        <>
            <OrthographicCamera
                    ref={cameraRef}
                    makeDefault
                    // ref={orthographicCameraRef}
                    zoom={20}//{25}
                    near={1}//1
                    far={2000}//{2000}
                    position={position}//[180, 120, 200]}
                    />
            <OrbitControls
                    enablePan={true}
                    enableRotate={false}
                    />
        </>
    )
}

export { RCamera };