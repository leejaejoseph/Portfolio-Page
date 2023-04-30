import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';

export function Languages(props) {
    const [hover, setHover] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const reactRef = useRef();
    const navigate = useNavigate();

    const languageItems = useGLTF('/assets/languageItems.glb');
    const title = useGLTF('/assets/languageTitle.glb');
    const sqlLight = useGLTF('/assets/sqlLight.glb');
    const reactItem = useGLTF('/assets/react.glb');

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

    useEffect(()=> {
      titleMaterial.emissiveIntensity = react1.emissiveIntensity = javaScript1.emissiveIntensity = javaScript2.emissiveIntensity = html1.emissiveIntensity = html2.emissiveIntensity = css1.emissiveIntensity = css2.emissiveIntensity = typeScript1.emissiveIntensity = typeScript2.emissiveIntensity = postgreSQL1.emissiveIntensity = postgreSQL2.emissiveIntensity = 0;
      setLoaded(true);
    }, [])

    let elapsedTime = 0;

    useFrame((state, delta) => {
      if (hover && loaded) {
        const emission = Math.min(1, titleMaterial.emissiveIntensity + delta * 2);
        titleMaterial.emissiveIntensity = react1.emissiveIntensity = javaScript1.emissiveIntensity = javaScript2.emissiveIntensity = html1.emissiveIntensity = html2.emissiveIntensity = css1.emissiveIntensity = css2.emissiveIntensity = typeScript1.emissiveIntensity = typeScript2.emissiveIntensity = postgreSQL1.emissiveIntensity = postgreSQL2.emissiveIntensity = emission;
      } else {
        const emission = Math.max(0, titleMaterial.emissiveIntensity - delta * 2);
        titleMaterial.emissiveIntensity = react1.emissiveIntensity = javaScript1.emissiveIntensity = javaScript2.emissiveIntensity = html1.emissiveIntensity = html2.emissiveIntensity = css1.emissiveIntensity = css2.emissiveIntensity = typeScript1.emissiveIntensity = typeScript2.emissiveIntensity = postgreSQL1.emissiveIntensity = postgreSQL2.emissiveIntensity = emission;
      }
      elapsedTime+=delta
      reactRef.current.rotation.y += delta;
      reactRef.current.position.y = Math.sin((elapsedTime*.01) * 100);
    });
    return (
      <group
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) => {
          e.stopPropagation();
          navigate('/frameworks');
        }}>
        <primitive
          object={languageItems.scene}
          {...props}
          position={[-2, 0, 0]}
        />
        <primitive
          object={title.scene}
          {...props}
          position={[-2, 0, 0]}
        />
        <primitive
          object={sqlLight.scene}
          {...props}
          position={[-2, 0, 0]}
        />
        <group>
          <primitive
            ref={reactRef}
            object={reactItem.scene}
            {...props}
            position={[-20, 0, 16.2]}
          />
        </group>
      </group>
    );
  }