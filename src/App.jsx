import { useRef } from 'react';
import * as THREE from 'three';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls, PerspectiveCamera, Stars, Environment, useGLTF } from '@react-three/drei';

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

function MyComponent() {
  const { camera } = useThree();
  console.log(camera.position);
  const orbitRef = useRef();
  useFrame(() => {
    // console.log(orbitRef.current.target);
    // const azimuthalAngle = orbitRef.current.getAzimuthalAngle();
    // const polarAngle = orbitRef.current.getPolarAngle();
    // const zoom = orbitRef.current.zoom;

    // console.log(`Azimuthal angle: ${azimuthalAngle}, Polar angle: ${polarAngle}, Zoom: ${zoom}`);
  });
  return <OrbitControls rotate={[0, Math.PI / 2, 0]} />;
}

function CameraPosition() {
  const { camera } = useThree();
  const orbitRef = useRef();
  const [azimuthal, setAzimuthal] = useState(0);
  const [polar, setPolar] = useState(0);

  useFrame(() => {
    if (orbitRef.current) {
      const azimuthalAngle = orbitRef.current.getAzimuthalAngle();
      const polarAngle = orbitRef.current.getPolarAngle();

      setAzimuthal(azimuthalAngle);
      setPolar(polarAngle);
    }
  });

  return (
    <div style={{ position: "absolute", top: 10, left: 10 }}>
      <div>Azimuthal angle: {azimuthal.toFixed(2)}</div>
      <div>Polar angle: {polar.toFixed(2)}</div>
    </div>
  );
}

export default function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
      <Canvas camera={{ position: [0, 5, 10], rotation: [0, 0, 0] }}>
      <color attach="background" args={[0xf5deb3]} />
      <PerspectiveCamera makeDefault={true} position={[0, 0, 100]} />
      <ambientLight intensity={0.5}/>
      <spotLight position={[0, 0, 0]} angle={0.3} />
      <Torus position={[-5, 0, -10]}/>
      <LinkedIn position={[0, 0, 0]} />
      <Resume position={[0, 0, 0]}/>
      <Plane position={[0, 0, 0]} />
      <Physics/>
      <OrbitControls ref={orbitRef} rotate={[0, Math.PI / 2, 0]} />
      <CameraPosition />
    </Canvas>
    </BrowserRouter>
  )
}