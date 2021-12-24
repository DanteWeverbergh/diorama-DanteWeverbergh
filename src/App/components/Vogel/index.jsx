import { useLoader } from '@react-three/fiber';

import model from '../../../Models/gelekanarievogel.glb';
import Diorama from '../../../Models/model.glb';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Bird = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials.SVGMat}
        position={[-21.38, 0, 12.06]}
        scale={[198.12, 198.12, 198.12]}
      />
    </group>
  );
};

useGLTF.preload('/gelekanarievogel.glb');

export default Bird;
