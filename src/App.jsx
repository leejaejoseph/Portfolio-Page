import { useRef, useState } from 'react';
import * as THREE from 'three';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, OrthographicCamera, Stars, Environment, Reflector, useGLTF } from '@react-three/drei';

function Plane(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/plane.glb');
  return <primitive object={gltf.scene} {...props}/>;
}

function Grid(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/grid.glb');
  return <primitive object={gltf.scene} {...props}/>;
}

function Water(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/WaterBottle.glb');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;
}

// function LinkedIn(props) {
//   const [hover, setHover] = useState(true);
//   const gltf = useGLTF('/src/assets/Portfolio-blender/linkedin-shrink.gltf');
//   return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

// function Resume(props) {
//   const [hover, setHover] = useState(true);
//   const gltf = useGLTF('/src/assets/Portfolio-blender/resume-shrink.gltf');
//   return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

// function CubeNetwork(props) {
//   const [hover, setHover] = useState(true);
//   const gltf = useGLTF('/src/assets/Portfolio-blender/cube-network.gltf');
//   return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

// function React(props) {
//   const [hover, setHover] = useState(true);
//   const gltf = useGLTF('/src/assets/Portfolio-blender/react.gltf');
//   return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

// function Postgresql(props) {
//   const [hover, setHover] = useState(true);
//   const gltf = useGLTF('/src/assets/Portfolio-blender/postgresql.gltf');
//   return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

// function FullStack(props) {
//   const [hover, setHover] = useState(true);
//   const gltf = useGLTF('/src/assets/Portfolio-blender/fullstack.gltf');
//   return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

// function Joseph(props) {
//   const [hover, setHover] = useState(true);
//   const gltf = useGLTF('/src/assets/Portfolio-blender/joseph.gltf');
//   return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function Total(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/total.glb');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

export default function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas style={{backgroundImage: 'linear-gradient(to bottom, #000000 50%, #0e4f21)'}}>
        <hemisphereLight/>
        <Water/>
        <Plane/>
        <Grid/>
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
      </Canvas>
    </BrowserRouter>
  )
}