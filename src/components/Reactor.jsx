import React, {useRef} from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Reactor(props) {
    const reactor = useGLTF('/assets/reactor.glb');
    const atom = useGLTF('/assets/atom.glb');

    const positions = [
        [-23, 0, 63],
        [-33, 0, -43],
        [47, 0, 13],
      ];

    return (
    <>
        {positions.map((position, index) => {
            const atomRef = useRef();
            const clonedReactor = reactor.scene.clone(true);
            const clonedReact = atom.scene.clone(true);
            
            let elapsedTime = 0;
            useFrame((state, delta) => {
                elapsedTime+=delta
                atomRef.current.rotation.y += delta;
                atomRef.current.position.y = Math.sin((elapsedTime * 0.01 + index) * 100);
            });

            return (
                <group key={index} position={position}>
                    <primitive object={clonedReactor} {...props} />
                    <primitive ref={atomRef} object={clonedReact} {...props} />
                </group>
            );
        })}
    </>
    );
}
