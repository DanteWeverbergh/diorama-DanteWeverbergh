import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import Model from '../../../Models/animation.glb';
import { useParams } from 'react-router-dom';

const Diorama = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Model);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.kicking.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[17.82, 4.41, 2.69]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      >
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.Beta_Joints.geometry}
          material={materials.Beta_Joints_MAT}
          skeleton={nodes.Beta_Joints.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Beta_Surface.geometry}
          material={materials['asdf1:Beta_HighLimbsGeoSG2']}
          skeleton={nodes.Beta_Surface.skeleton}
        />
      </group>
      <group position={[12.06, 2.37, 17.62]} scale={[0.27, -0.81, 0.27]}>
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
        position={[-4.14, 1.65, 11.92]}
        scale={[3.87, 0.45, 3.55]}
      />
      <group position={[3.92, 2.37, 17.62]} scale={[0.27, -0.81, 0.27]}>
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
      <group position={[-13.62, 5.78, 5.05]} scale={[0.27, -0.81, 0.27]}>
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
        position={[12.19, 15.28, -7.67]}
        scale={[1.76, 1.76, 1.76]}
      />
      <group position={[12.43, 2.43, 8.24]} scale={[0.13, -1.11, 0.13]}>
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
        position={[14.03, 1.74, 6.79]}
        scale={[0.6, 0.6, 0.6]}
      />
      <group position={[14.03, 2.39, 6.79]} scale={[0.39, 0.39, 0.39]}>
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
          material={materials.Stam}
        />
      </group>
      <group position={[14.03, 2.8, 6.79]} scale={[0.22, 0.22, 0.22]}>
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
        position={[14.22, 2.9, 6.86]}
        scale={[0.04, 0.04, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={nodes.Icosphere004.material}
        position={[14.22, 2.9, 6.71]}
        scale={[0.04, 0.04, 0.04]}
      />
      <group position={[12.43, 2.43, 11.08]} scale={[0.13, -1.11, 0.13]}>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_2.geometry}
          material={materials['Snow.001']}
        />
      </group>
      <group
        position={[10.21, 2.9, 12.34]}
        rotation={[0, 0.01, -Math.PI / 2]}
        scale={[0.44, 0.44, 0.44]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={nodes.Plane_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={nodes.Plane_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall002.geometry}
          material={materials['Snow.011']}
          position={[-1.15, 0.1, 0]}
          rotation={[0.01, 0, Math.PI / 2]}
          scale={[2.27, 2.27, 2.27]}
        />
      </group>
      <group
        position={[10.21, 2.9, 7.33]}
        rotation={[0, 0.01, -Math.PI / 2]}
        scale={[0.44, 0.44, 0.44]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials['ligtje.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall010.geometry}
          material={materials['Snow.012']}
          position={[-1.16, 0.11, -0.12]}
          rotation={[0.01, 0, Math.PI / 2]}
          scale={[2.27, 2.27, 2.27]}
        />
      </group>
      <group
        position={[7.81, 2.9, 13.91]}
        rotation={[0, -1.56, -1.57]}
        scale={[0.44, 0.44, 0.44]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials['ligtje.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall011.geometry}
          material={materials['Snow.013']}
          position={[-1.15, 0.11, 0.01]}
          rotation={[-1.56, 0, Math.PI / 2]}
          scale={[2.27, 2.27, 2.27]}
        />
      </group>
      <group
        position={[7.97, 2.9, 5.52]}
        rotation={[-3.14, -1.56, -1.57]}
        scale={[0.44, 0.44, 0.44]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials['ligtje.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall012.geometry}
          material={materials['Snow.014']}
          position={[1.15, 0.1, -0.01]}
          rotation={[1.58, 0, -Math.PI / 2]}
          scale={[2.27, 2.27, 2.27]}
        />
      </group>
      <group position={[12.06, 2.37, 0.58]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials['Boom.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials['Stam.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_2.geometry}
          material={materials['Material.017']}
        />
      </group>
      <group position={[7.85, 3.2, -6.98]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials['Boom.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials['Stam.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_2.geometry}
          material={materials['Material.018']}
        />
      </group>
      <group position={[-5.96, 6.77, -13.94]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials['Boom.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials['Stam.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_2.geometry}
          material={materials['Material.019']}
        />
      </group>
      <group position={[0, -4.58, 0]}>
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
          material={nodes.Cube001_1.material}
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
          material={nodes.Cube001_3.material}
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
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 15.28, 11.85]}
        scale={[1.76, 1.76, 1.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolk1.geometry}
        material={nodes.Wolk1.material}
        position={[4.17, 11.32, -4.06]}
        scale={[1.76, 1.76, 1.76]}
      />
      <group position={[0, -4.58, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={nodes.Cube005_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={nodes.Cube005_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Material.012']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cadeau.geometry}
        material={nodes.cadeau.material}
        position={[18.17, 3.42, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cadeau_top.geometry}
        material={nodes.cadeau_top.material}
        position={[18.04, 4.37, 3.36]}
        scale={[1.36, 0.37, 1.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.snowflake.geometry}
        material={nodes.snowflake.material}
        position={[-4.67, 19.08, 58.63]}
      />
    </group>
  );
};

useGLTF.preload('/animations.glb');

export default Diorama;
