import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Navbar, Languages, Plane, LinkedIn, Resume, BeTabd, EsportsViewer, BackLights, Reactor, AboutMe, Filler, Overlay, CanvasCamera } from './components/utility/exports'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Overlay/>
      <div className='w-[100vw] h-[100vh]'>
        <Canvas 
        style={
          {backgroundImage: 'linear-gradient(to bottom, #000000 50%, #33a6ff)'}}        
          >
          <Environment background preset="night"/>
          <BackLights/>
          <Reactor/>
          <Languages/>
          <LinkedIn/>
          <Resume/>
          <BeTabd/>
          <Reactor/>
          <AboutMe />
          <EsportsViewer/>
          <Filler/>
          <Plane/>
          <CanvasCamera/>
        </Canvas>
      </div>
    </BrowserRouter>
  )
}