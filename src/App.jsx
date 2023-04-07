import * as THREE from 'three';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

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

export default function App() { 

  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas orthographic camera={{ position: [2,25,2], left: -2, right: 2, top: 1, bottom: -2, zoom: 1}}>
        <color attach="background" args={[0xf5deb3]} />
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <spotLight
          position={[0, 0, 0]} angle={0.3} />
        <Torus position={[-5, 0, -10]}/>
        <LinkedIn position={[0, 0, 0]} />
        <Resume position={[0, 0, 0]}/>
        <Plane position={[0, 0, 0]} />
        <Physics/>
      </Canvas>
    </BrowserRouter>
  )
}