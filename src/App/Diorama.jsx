import { Canvas } from '@react-three/fiber';
import { useParams } from 'react-router-dom';
import Content from './Content';

const App = () => {
  let { name } = useParams();

  return (
    <>
      <div className="diorama">
        <h1 id="message" className="hidden">
          Happy New year and merry chirstmas {name} !!!
        </h1>

        <Canvas className="canvas" camera={{ fov: 55, position: [30, 5, 20] }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[20, 10, 20]} intensity={0.5} />
          <directionalLight position={[0, 10, 20]} intensity={0.8} />
          <spotLight intensity={0.1} position={[30, 10, 0]} />
          <Content linear={false} shadows={true} />
        </Canvas>
      </div>
    </>
  );
};

export default App;
