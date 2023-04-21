import { useRef, useState } from 'react';
import * as THREE from 'three';
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
import { OrbitControls, OrthographicCamera, MeshReflectorMaterial, Environment, useGLTF } from '@react-three/drei';
import { Gridh } from './components/Gridh';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas 
      style={
        {backgroundImage: 'linear-gradient(to bottom, #000000 50%, #33a6ff)'}}
        >
        <Environment background preset="night"/>
        <directionalLight intensity={.25} color="#ffffff" position={[1, 2, 3]} />
        <Grid/>
        <Languages position={[10, 1, 10]}/>
        <Gridh/>
        <LinkedIn/>
        <Resume/>
        <BeTabd/>
        <EsportsViewer/>
        <OrbitControls
          enableRotate={false}
        />
        <OrthographicCamera
          makeDefault
          zoom={25}
          near={1}
          far={2000}
          position={[180, 120, 200]}
        />
        <Plane/>
      </Canvas>
    </BrowserRouter>
  )
}