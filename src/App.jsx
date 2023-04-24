import { useRef, useState } from 'react';
import * as THREE from 'three';

import { BoxHelper, Object3D } from 'three';

import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Languages } from './components/Languages';
import { Grid } from './components/Grid';
import { Plane } from './components/Plane';
import { LinkedIn } from './components/LinkedIn';
import { Resume } from './components/Resume'
import { Canvas, useThree } from '@react-three/fiber';
import { BeTabd } from './components/BeTabd'
import { EsportsViewer } from './components/EsportsViewer'
import { OrbitControls, OrthographicCamera, Environment, useGLTF, useHelper } from '@react-three/drei';
import { useControls } from 'leva';
import { BLight } from './components/BackLights';
import { Reactor } from './components/Reactor';
import { AboutMe } from './components/AboutMe';

export default function App() {

  const cameraCont = useControls({z:25, n:1, f:2000, x2:180, y2:120, z2:200, li:1, l1:1, l2:2, l3:3})

  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas 
      style={
        {backgroundImage: 'linear-gradient(to bottom, #000000 50%, #33a6ff)'}}
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
        <AboutMe/>
        <EsportsViewer/>
        <OrbitControls
          enableRotate={false}
        />
        <OrthographicCamera
          makeDefault
          zoom={cameraCont.z}//{25}
          near={cameraCont.n}//1
          far={cameraCont.f}//{2000}
          position={[cameraCont.x2, cameraCont.y2, cameraCont.z2]}//[180, 120, 200]}
        />
        <Plane/>
      </Canvas>
    </BrowserRouter>
  )
}