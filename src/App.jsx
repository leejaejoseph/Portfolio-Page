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

export default function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas styles={{ height: 400, width: 400 }}>
        <color attach="background" args={[0x000000]} />
        <ambientLight intensity={1}/>
        <spotLight position={[0, 0, 0]} angle={0.3} />
        <Torus position={[-5, -5, -10]}/>
        <LinkedIn position={[0, -5, 0]} />
        <Resume position={[0, -5, 0]}/>
        <Plane position={[0, -10, 0]} />
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