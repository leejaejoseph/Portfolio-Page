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
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { BeTabd } from './components/BeTabd'
import { EsportsViewer } from './components/EsportsViewer'
import { OrbitControls, OrthographicCamera, Environment, useGLTF, useHelper, Loader } from '@react-three/drei';
import { useControls } from 'leva';
import { BLight } from './components/BackLights';
import { Reactor } from './components/Reactor';
import { AboutMe } from './components/AboutMe';
import { Filler } from './components/Filler';
// import { Overlay } from './components/Overlay';
// import { LoadingScreen } from './components/LoadingScreen';


export default function App() {
  const cameraCont = useControls({z:20, n:1, f:2000, x2:160, y2:151, z2:240, li:1, l1:1, l2:2, l3:3})
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='absolute z-30 w-full h-full flex justify-center items-center'>
        <div className='w-9/12 relative flex h-[70vh] justify-center flex-wrap rounded-3xl bg-white/40'>
          <div className='w-full'>
            <h1 className='w-full text-center text-6xl pt-20 font-Roboto-Mono'>
              About Me
            </h1>
          </div>
          <div className='w-9/12 text-3xl font-Roboto-Mono'>
            <h4>
            My name is Joseph Lee, and I am a front-end web developer having shifted from media marketing. Software engineering is a means for me to bring life to innovations that expand digital's capabilities. My desires for the "new", questionings of possibilities, and adaptability towards uncertainty are all qualities extensively developed throughout my university and post-undergraduate career in hopes to project manage all aspects from pr and marketing to full-stack development. This is in belief that even the best technologies have often seen abandonment due to its poor branding.
            </h4>
          </div>
          <button className='fixed right-96 text-6xl pt-20 pl-6'>
            x
          </button>
        </div>
      </div>
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
        <Filler/>
        <OrbitControls
          enablePan={true}
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