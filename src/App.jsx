import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { BoxHelper, Object3D } from 'three';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Languages } from './components/Languages';
import { Grid } from './components/Grid';
import { Plane } from './components/Plane';
import { LinkedIn } from './components/LinkedIn';
import { Resume } from './components/Resume'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { BeTabd } from './components/BeTabd'
import { EsportsViewer } from './components/EsportsViewer'
import { OrbitControls, OrthographicCamera, Environment, useGLTF, useHelper, Loader, PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';
import { BLight } from './components/BackLights';
import { Reactor } from './components/Reactor';
import { AboutMe } from './components/AboutMe';
import { Filler } from './components/Filler';
import { Overlay } from './components/Overlay';
// import { LoadingScreen } from './components/LoadingScreen';


export default function App() {
  const orthographicCameraRef = useRef();
  const perspectiveCameraRef = useRef();

  const [isOrthographic, setIsOrthographic] = useState(true);

  const cameraCont = useControls({z:20, n:1, f:2000, x2:160, y2:151, z2:240, li:1, l1:1, l2:2, l3:3})
  return (
    <BrowserRouter>
      <Navbar/>
      <Overlay/>
      <Canvas 
      style={
        {backgroundImage: 'linear-gradient(to bottom, #000000 50%, #33a6ff)'}}
        camera={isOrthographic ? orthographicCameraRef.current : perspectiveCameraRef.current}
      
        >
        <Environment background preset="night"/>
        <BLight/>
        <Reactor/>
        {/* <directionalLight intensity={1} color="#ffffff" position={[1, 2, 3]} /> */}
        <Grid/>
        <Languages position={[10, 1, 10]}/>
        <LinkedIn/>
        <Resume/>
        <BeTabd/>
        <Reactor/>
        <AboutMe onClose={setIsOrthographic(!isOrthographic)}/>
        <EsportsViewer/>
        <Filler/>
        <OrbitControls
          enablePan={true}
          enableRotate={false}
          />
        <OrthographicCamera
          makeDefault
          ref={orthographicCameraRef}
          zoom={cameraCont.z}//{25}
          near={cameraCont.n}//1
          far={cameraCont.f}//{2000}
          position={[cameraCont.x2, cameraCont.y2, cameraCont.z2]}//[180, 120, 200]}
        />
        <PerspectiveCamera
          ref={perspectiveCameraRef}
          position={[0, 140, 200 ]}/>
        <Plane/>
      </Canvas>
    </BrowserRouter>
  )
}