import React, {useRef} from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';


export function Reactor(props) {
    const reactor = useGLTF('/src/assets/Portfolio-blender/reactor.glb');
    const react = useGLTF('/src/assets/Portfolio-blender/react.glb');

    const reactRef = useRef();

    
    useFrame((state, delta) => {
        reactRef.current.rotation.y += delta;
    });

    const positions = [
        [-23, 0, 49],
        [-33, 0, -43],
        [47, 0, 13],
      ];
    

    return (
    <>
        {positions.map((position, index) => {
                const clonedReactor = reactor.scene.clone(true);
                const clonedReact = react.scene.clone(true);
                return (
                    <group key={index} position={position}>
                        <primitive object={clonedReactor} {...props} />
                        <primitive ref={reactRef} object={clonedReact} {...props} />
                    </group>
                );
            })}
    </>
    
    );
}
