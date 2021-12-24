import { Canvas } from '@react-three/fiber';
import Content from './Content';

const App = () => {
  return (
    <Canvas>
      {/*<ambientLight intensity={0.1} />*/}
      {/*<directionalLight color="white" position={[0, 0, 5]} />*/}
      <Content linear={false} shadows={true} />
    </Canvas>
  );
};

export default App;
