import React, { useEffect, useRef, useState } from 'react';
import { SpotLight, useGLTF, useHelper, } from '@react-three/drei';
import { BoxHelper, Object3D } from 'three';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';


export function Languages(props) {
    const [hover, setHover] = useState(false);
    const reactRef = useRef();

    const languageItems = useGLTF('/src/assets/Portfolio-blender/languageItems.glb');
    const title = useGLTF('/src/assets/Portfolio-blender/languageTitle.glb');
    const sqlLight = useGLTF('/src/assets/Portfolio-blender/sqlLight.glb');
    const reactItem = useGLTF('/src/assets/Portfolio-blender/reactItem.glb') 

    const titleMaterial = title.scene.children[0].children[0].material;
    const mesh = languageItems.scene.children;
    
    const react1 = mesh[7].material;
    const typeScript1 = mesh[5].children[0].material;
    const typeScript2 = mesh[5].children[1].material;
    const postgreSQL1 = mesh[6].children[0].material;
    const postgreSQL2 = mesh[6].children[1].material;
    const javaScript1 = mesh[11].children[1].material;
    const javaScript2 = mesh[11].children[2].material;
    const html1 = mesh[11].children[3].material;
    const html2 = mesh[11].children[4].material;
    const css1 = mesh[11].children[5].material;
    const css2 = mesh[11].children[6].material;
    
    const {position} = languageItems.scene;
    const addx = useControls({x: 0, xyz:0})
    const addy = useControls({y: 50})
    const addz = useControls({z: 0})
    const pos = useControls({lx: 0, ly: 0, lz: 0})
    const distance = useControls({d: 100})
    const intensity = useControls({i: 4})
    const helper = useRef();
    const pi = useControls({pi:8})
    useHelper(helper, BoxHelper, 'cyan')
    // useHelper(condition && mesh, BoxHelper, 'red')
    let elapsedTime = 0;

    useFrame((state, delta) => {
      if (hover) {
        const t = Math.min(1, titleMaterial.emissiveIntensity + delta * 2);
        titleMaterial.emissiveIntensity = react1.emissiveIntensity = javaScript1.emissiveIntensity = javaScript2.emissiveIntensity = html1.emissiveIntensity = html2.emissiveIntensity = css1.emissiveIntensity = css2.emissiveIntensity = typeScript1.emissiveIntensity = typeScript2.emissiveIntensity = postgreSQL1.emissiveIntensity = postgreSQL2.emissiveIntensity = t;
      } else {
        const t = Math.max(0, titleMaterial.emissiveIntensity - delta * 2);
        titleMaterial.emissiveIntensity = react1.emissiveIntensity = javaScript1.emissiveIntensity = javaScript2.emissiveIntensity = html1.emissiveIntensity = html2.emissiveIntensity = css1.emissiveIntensity = css2.emissiveIntensity = typeScript1.emissiveIntensity = typeScript2.emissiveIntensity = postgreSQL1.emissiveIntensity = postgreSQL2.emissiveIntensity = t;
      }
      elapsedTime+=delta
      reactRef.current.rotation.y += delta;
      reactRef.current.position.y = Math.sin((elapsedTime*.01) * 100);
    });
    return (
      <>
        <SpotLight
          ref={helper}
          castShadow
          position={[position.x + addx.x, position.y + addy.y, position.z + addz.z]}
          // 20, 34, 14
          target={languageItems.scene}
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
          object={languageItems.scene}
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
          object={sqlLight.scene}
          {...props}
          position={[-2, 0, 0]}
        />
        <group>
          <primitive
            ref={reactRef}
            object={reactItem.scene}
            {...props}
            position={[-21, 0, 14.5]}
          />
        </group>
      </>
    );
  }