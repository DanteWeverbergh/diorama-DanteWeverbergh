import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Island = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[12.06, 6.95, 17.62]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['Boom.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials['Stam.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Water.geometry}
        material={materials.water}
        position={[-4.14, 6.23, 11.92]}
        scale={[3.87, 0.45, 3.55]}
      />
      <group position={[3.92, 6.95, 17.62]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials['Boom.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials['Stam.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_2.geometry}
          material={materials['Material.009']}
        />
      </group>
      <group position={[-13.62, 10.36, 5.05]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['Boom.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials['Stam.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_2.geometry}
          material={materials['Material.010']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[12.19, 19.86, -7.67]}
        scale={[1.76, 1.76, 1.76]}
      />
      <group position={[12.43, 7.01, 8.24]} scale={[0.13, -1.11, 0.13]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={nodes.Cylinder007_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_2.geometry}
          material={nodes.Cylinder007_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[14.06, 6.25, 6.79]}
        scale={[0.39, 0.39, 0.39]}
      />
      <group position={[14.06, 6.67, 6.79]} scale={[0.25, 0.25, 0.25]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={nodes.Icosphere001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_2.geometry}
          material={nodes.Icosphere001_2.material}
        />
      </group>
      <group position={[14.06, 6.94, 6.79]} scale={[0.15, 0.15, 0.15]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_1.geometry}
          material={nodes.Icosphere002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_2.geometry}
          material={materials.oranje}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={nodes.Icosphere003.material}
        position={[14.18, 7, 6.83]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={nodes.Icosphere004.material}
        position={[14.18, 7, 6.73]}
        scale={[0.03, 0.03, 0.03]}
      />
      <group position={[12.43, 7.01, 11.08]} scale={[0.13, -1.11, 0.13]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={nodes.Cylinder011_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_2.geometry}
        material={nodes.Cube001_2.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_3.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_4.geometry}
        material={nodes.Cube001_4.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_5.geometry}
        material={materials['Material.012']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SnowBall002.geometry}
        material={materials['Snow.005']}
        position={[10.28, 8.12, 11.97]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SnowBall003.geometry}
        material={materials['Snow.006']}
        position={[9.27, 10.31, 9.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SnowBall005.geometry}
        material={materials['Snow.008']}
        position={[9.27, 12.16, 9.71]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SnowBall006.geometry}
        material={materials['Snow.009']}
        position={[6.57, 10.38, 9.72]}
      />
      <group position={[14.14, 6.95, 2.62]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Boom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={nodes.Cylinder_1.material}
        />
      </group>
      <group position={[10.35, 6.95, 2.62]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials['Boom.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['Stam.001']}
        />
      </group>
      <mesh
        name="Sphere"
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 19.86, 0]}
        scale={[1.76, 1.76, 1.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[4.17, 15.91, 15.28]}
        scale={[1.76, 1.76, 1.76]}
      />
    </group>
  );
};

useGLTF.preload('/model.glb');

export default Island;
