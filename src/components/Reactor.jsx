import React, {useRef} from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';


export function Reactor(props) {
    const reactor = useGLTF('/src/assets/Portfolio-blender/reactor.glb');
    const react = useGLTF('/src/assets/Portfolio-blender/react.glb');

    const positions = [
        [-23, 0, 63],
        [-33, 0, -43],
        [47, 0, 13],
      ];
    

    return (
    <>
        {positions.map((position, index) => {
                const reactRef = useRef({}); 
                let elapsedTime = 0;
                useFrame((state, delta) => {
                    elapsedTime+=delta
                    reactRef.current.rotation.y += delta;
                    reactRef.current.position.y = Math.sin((elapsedTime*.01+ index) * 100);
                }, );

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
