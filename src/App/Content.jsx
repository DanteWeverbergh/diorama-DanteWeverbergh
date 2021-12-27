import { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { OrbitControls, TrackballControls } from '@react-three/drei';

import { folder, useControls } from 'leva';

import { Diorama } from './components';

const Content = () => {
  return (
    <>
      <>
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />

        <TrackballControls />
      </>

      <Router>
        <>
          <Suspense fallback={null}>
            <Diorama />
          </Suspense>
        </>
      </Router>
    </>
  );
};

export default Content;
