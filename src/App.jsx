import { useRef,   } from 'react';
import * as THREE from 'three';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls, OrthographicCamera, Stars, Environment, useGLTF } from '@react-three/drei';
import { GridHelper } from 'three'

function Torus(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/torus.gltf');
  return <primitive object={gltf.scene} {...props} />;
}

function LinkedIn(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/linkedin-shrink.gltf');
  return <primitive object={gltf.scene} {...props} />;
}

function Resume(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/resume-shrink.gltf');
  return <primitive object={gltf.scene} {...props} />;
}

function Plane(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/plane.gltf');
  return <primitive object={gltf.scene} {...props} />;
}

function CubeNetwork(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/cube-network.gltf');
  return <primitive object={gltf.scene} {...props} />;
}

function React(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/react.gltf');
  return <primitive object={gltf.scene} {...props} />;
}

function Postgresql(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/postgresql.gltf');
  return <primitive object={gltf.scene} {...props} />;
}


export default function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas shadow="true" styles={{ height: 400, width: 400 }}>
        <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <color attach="background" args={[0x000000]}/>
        <Torus position={[-5, -5, -10]}/>
        <LinkedIn position={[0, -5, 0]}/>
        <Resume position={[0, -5, 0]}/>
        <Plane position={[0, -10, 0]}/>
        <CubeNetwork position={[0, -10, 0]}/>
        <React position={[-40, -10, 0]} rotation={[0, -Math.PI / 4, 0]} />
        <Postgresql position={[-40, 0, 0]}/>
        <OrbitControls
          enableRotate={false}
        />
        <OrthographicCamera
          makeDefault
          zoom={25}
          near={1}
          far={2000}
          position={[180, 80, 200]}
        />
      </Canvas>
    </BrowserRouter>
  )
}