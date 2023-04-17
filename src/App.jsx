import { useRef,   } from 'react';
import * as THREE from 'three';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls, OrthographicCamera, Stars, Environment, useGLTF } from '@react-three/drei';
import { GridHelper } from 'three'

function Torus(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/torus.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;
}

function LinkedIn(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/linkedin-shrink.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function Resume(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/resume-shrink.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function Plane(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/plane.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function CubeNetwork(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/cube-network.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function React(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/react.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function Postgresql(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/postgresql.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function FullStack(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/fullstack.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function Joseph(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/joseph.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

function Total(props) {
  const [hover, setHover] = useState(true);
  const gltf = useGLTF('/src/assets/Portfolio-blender/total4.gltf');
  return <primitive onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} object={gltf.scene} {...props}/>;}

export default function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas shadow="true" styles={{ height: 400, width: 400, background: 'linear-gradient(90deg, #666666, #33ff6c)'}}>
        <hemisphereLight color="white" groundColor="blue" intensity={1} />
        <color attach="background" args={[0xffffff]}/>S
        <Torus position={[-5, -5, -10]}/>
        <LinkedIn position={[0, -5, 0]}/>
        <Resume position={[0, -5, 0]}/>
        <Plane position={[0, -10, 0]}/>
        <CubeNetwork position={[0, -10, 0]}/>
        <React position={[-40, -10, 0]} rotation={[0, -Math.PI / 4, 0]} />
        <Postgresql position={[-40, 0, 0]}/>
        <FullStack position={[-50, 0, 0]}/>
        <Joseph/>
        <Total/>
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