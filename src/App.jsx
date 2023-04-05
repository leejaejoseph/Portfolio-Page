import * as THREE from 'three';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Canvas, useLoader } from '@react-three/fiber';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls, Stars } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Box() {
  const [ref] = useBox(()=> ({mass: 1, position: [0, 10, 0]}))
  return (
    <mesh ref={ref} position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane(()=> ({
    rotation: [-Math.PI / 2, 0, 0]
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]}/>
      <meshLambertMaterial attach="material" color="lightblue"/>
    </mesh>
  )
}

function Model(props) {
  const gltf = useGLTF('/src/assets/Portfolio-blender/boxed-plane.gltf');
  return <primitive object={gltf.scene} {...props} />;
}
export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5}/>
        <spotLight
          position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Box/>
          <Model position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </BrowserRouter>
  )
}