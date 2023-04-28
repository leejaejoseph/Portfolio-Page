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
import { RCamera} from './components/RCamera';
// import { LoadingScreen } from './components/LoadingScreen';


export default function App() {
  // const orthographicCameraRef = useRef();
  // const perspectiveCameraRef = useRef();

  // const [isOrthographic, setIsOrthographic] = useState(true); onClose={setIsOrthographic(!isOrthographic)}

  const cameraCont = useControls({z:20, n:1, f:2000, li:1, l1:1, l2:2, l3:3})
  return (
    <BrowserRouter>
      <Navbar/>
      <Overlay/>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas 
        style={
          {backgroundImage: 'linear-gradient(to bottom, #000000 50%, #33a6ff)'}}        
          >
          <Environment background preset="night"/>
          <BLight/>
          <Reactor/>
          <Grid/>
          <Languages position={[10, 1, 10]}/>
          <LinkedIn/>
          <Resume/>
          <BeTabd/>
          <Reactor/>
          <AboutMe />
          <EsportsViewer/>
          <Filler/>
          <Plane/>
          <RCamera/>
        </Canvas>
      </div>
    </BrowserRouter>
  )
}