import React, { useEffect, useRef, useState } from 'react';
import { SpotLight, useGLTF, useHelper, } from '@react-three/drei';
import { BoxHelper, Object3D } from 'three';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';


export function Languages(props) {
    const [hover, setHover] = useState(false);
    const stack = useGLTF('/src/assets/Portfolio-blender/languageItems.glb');
    const title = useGLTF('/src/assets/Portfolio-blender/languageTitle.glb');
    const sqlLight = useGLTF('/src/assets/Portfolio-blender/sqlLight.glb');
    const reactItem = useGLTF('/src/assets/Portfolio-blender/reactItem.glb') 

    console.log(title.scene, stack.scene)
    const titleMaterial = title.scene.children[0].material; // Assuming the title only has one material
    const titleMaterial1 = title.scene.children[0].material; // Assuming the title only has one material
    const mesh = stack.scene.children[0].children;
    const stackMaterial = mesh[4].material;
    const stackMaterial1 = mesh[6].material;
    const stackMaterial2 = mesh[7].material;
    const {position} = stack.scene;
    const addx = useControls({x: 0})
    const addy = useControls({y: 50})
    const addz = useControls({z: 0})
    const pos = useControls({lx: 0, ly: 0, lz: 0})
    const distance = useControls({d: 100})
    const intensity = useControls({i: 4})
    const helper = useRef();
    const pi = useControls({pi:8})
    useHelper(helper, BoxHelper, 'cyan')
    // useHelper(condition && mesh, BoxHelper, 'red')
    
    useFrame((state, delta) => {
      if (hover) {
        const t = Math.min(1, titleMaterial.emissiveIntensity + delta * 2);
        titleMaterial.emissiveIntensity = titleMaterial1.emissiveIntensity = stackMaterial.emissiveIntensity = stackMaterial1.emissiveIntensity = stackMaterial2.emissiveIntensity = t;
      } else {
        const t = Math.max(0, titleMaterial.emissiveIntensity - delta * 2);
        titleMaterial.emissiveIntensity = titleMaterial1.emissiveIntensity = stackMaterial.emissiveIntensity = stackMaterial1.emissiveIntensity = stackMaterial2.emissiveIntensity = t;
      }
    });
    return (
      <>
        <SpotLight
          ref={helper}
          castShadow
          position={[position.x + addx.x, position.y + addy.y, position.z + addz.z]}
          // 20, 34, 14
          target={stack.scene}
          penumbra={1}
          distance={distance.d}
          //0
          angle={Math.PI / pi.pi} // make the cone wider
          //  angle={Math.PI / 9} // make the cone wider
          intensity={intensity.i}

          // intensity={hover ? .5 : 1.5}
          opacity={0.2}
        />
        <primitive
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          object={stack.scene}
          {...props}
          position={[-2, 0, 0]}
        />
        <primitive
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          object={title.scene}
          {...props}
          position={[-2, 0, 0]}
        />
        <primitive
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          object={sql-light.scene}
          {...props}
          position={[-2, 0, 0]}
        />
        <primitive
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          object={react.scene}
          {...props}
          position={[-2, 0, 0]}
        />
      </>
    );
  }