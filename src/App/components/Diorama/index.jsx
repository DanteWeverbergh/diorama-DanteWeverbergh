import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import Model from '../../../Models/diorama.glb';
import { useHistory } from 'react-router';

const Diorama = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Model);
  const { actions } = useAnimations(animations, group);
  const history = useHistory();

  const [active, setActive] = useState(false);

  useEffect(() => {
    /* animations glitchen
   
    actions.Wolk4.play();
    actions.Wolk3.play();
    */
    //console.log(actions);
  });

  const right = () => {
    document.getElementById('message').classList.remove('hidden');
    setActive(!active);

    history.push('/cadeau');
  };

  const wrong = () => {
    alert('Probeer opnieuw!');
  };
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Water"
        castShadow
        receiveShadow
        geometry={nodes.Water.geometry}
        material={materials.water}
        position={[-4.14, 1.65, 12.27]}
        scale={[3.87, 0.45, 3.55]}
      />
      <group
        position={[11.12, 2.8, 7.46]}
        rotation={[0, -0.58, 0]}
        scale={[0.22, 0.22, 0.22]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={materials.vloze}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_1.geometry}
          material={materials.oranje}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_2.geometry}
          material={nodes.Icosphere002_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_3.geometry}
          material={materials.Stam}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_4.geometry}
          material={materials.black}
        />
      </group>
      <group
        position={[8.02, 2.9, 9.31]}
        rotation={[-3.14, -1.56, -1.57]}
        scale={[0.44, 0.44, 0.44]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={nodes.Plane003_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_3.geometry}
          material={nodes.Plane003_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_5.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_6.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_7.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall002.geometry}
          material={materials['Snow.015']}
          position={[6.42, -9.55, 0.1]}
          rotation={[1.58, 0, -Math.PI / 2]}
          scale={[2.27, 2.27, 2.27]}
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
      <group
        position={[11.12, 2.8, 19.21]}
        rotation={[0, 0.29, 0]}
        scale={[0.22, 0.22, 0.22]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials['vloze.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials['oranje.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_2.geometry}
          material={materials['wit.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_3.geometry}
          material={materials['Stam.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_4.geometry}
          material={materials['black.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, -4.58, 0]}
      />
      <group
        position={[12.97, 3.11, 12.31]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.13, 0.13, 0.13]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials['Material.011']}
        />
      </group>
      <group
        position={[12.97, 3.11, 14.75]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.13, 0.13, 0.13]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials['red.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group
        position={[14.07, 3.11, 7.63]}
        rotation={[0, 0, 0]}
        scale={[0.13, 0.13, 0.13]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials['red.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials['Material.023']}
        />
      </group>
      <group
        position={[16.5, 3.11, 7.79]}
        rotation={[0, 0, 0]}
        scale={[0.13, 0.13, 0.13]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['red.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials['Material.024']}
        />
      </group>
      <group
        position={[19.63, 2.87, 2.93]}
        rotation={[-Math.PI, 0.01, -1.57]}
        scale={[0.44, 0.44, 0.44]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={nodes.Plane004_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_3.geometry}
          material={materials['wit.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_4.geometry}
          material={materials['Material.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_5.geometry}
          material={materials['Material.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_6.geometry}
          material={materials['Material.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_7.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall003.geometry}
          material={materials.Snow}
          position={[6.42, -9.54, 0.09]}
          rotation={[-3.13, 0, -1.57]}
          scale={[2.27, 2.27, 2.27]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.snowflake.geometry}
        material={nodes.snowflake.material}
        position={[-4.67, 19.08, 58.63]}
      />
      <group position={[-7.61, 2.82, -1.12]} scale={[0.27, -0.81, 0.27]}>
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
      <group position={[12.06, 4.47, -18.4]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Boom.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials['Stam.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['Material.020']}
        />
      </group>
      <group position={[-10.33, 5.79, -6.98]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials['Boom.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials['Stam.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials['Material.021']}
        />
      </group>
      <group position={[-13.62, 7.35, 16.25]} scale={[0.27, -0.81, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials['Boom.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials['Stam.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_2.geometry}
          material={materials['Material.022']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[4.26, 12.12, 4.02]}
        scale={[1.76, 1.76, 1.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[-7.72, 18.66, -4.87]}
        scale={[1.76, 1.76, 1.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[6.56, 10.21, -6.31]}
        scale={[1.76, 1.76, 1.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={nodes.Sphere004.material}
        position={[14.23, 17.16, -13.19]}
        scale={[1.77, 1.77, 1.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[-2.05, 15.28, 13.28]}
        scale={[1.76, 1.76, 1.76]}
      />
      <group position={[17.53, 1.86, 14.1]} scale={[0.62, 0.62, 0.62]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cadeau.geometry}
          material={materials['Material.049']}
          onClick={() => wrong()}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cadeau_1.geometry}
          material={materials['Material.048']}
        />
      </group>
      <group position={[17.53, 1.7, 12.89]} scale={[0.57, 0.57, 0.57]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau001.geometry}
          material={materials['Material.050']}
          onClick={() => wrong()}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau001_1.geometry}
          material={materials['Material.017']}
        />
      </group>

      <group position={[17.69, 1.66, 11.97]} scale={active ? 55 : 0.36}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau.geometry}
          material={materials['Material.058']}
          onClick={() => right()}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau_1.geometry}
          material={materials['Material.057']}
        />
      </group>

      <group position={[17.5, 1.69, 10.94]} scale={[0.64, 0.64, 0.64]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau002.geometry}
          material={materials['Material.054']}
          onClick={() => wrong()}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau002_1.geometry}
          material={materials['Material.053']}
        />
      </group>
      <group position={[17.46, 1.75, 9.53]} scale={[0.72, 0.72, 0.72]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau003.geometry}
          material={materials['Material.056']}
          onClick={() => wrong()}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cadeau003_1.geometry}
          material={materials['Material.055']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/diorama.glb');

export default Diorama;
