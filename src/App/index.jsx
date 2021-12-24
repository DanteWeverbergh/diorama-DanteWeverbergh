import { Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Content from './Content';

const App = () => {
  return (
    <Canvas camera={{ fov: 55, position: [30, 5, 20] }}>
      {/* 
      
      <hemisphereLight
        color={0xffffff}
        groundColor={0xffffff}
        intensity={0.2}
      />
      */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[20, 10, 20]} intensity={0.5} />
      <directionalLight position={[0, 10, 20]} intensity={0.8} />
      <spotLight intensity={0.1} position={[30, 10, 0]} />

      <Content linear={false} shadows={true} />
    </Canvas>
  );
};

export default App;
