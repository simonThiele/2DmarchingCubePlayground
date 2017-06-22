import React from 'react';

import MarchingSquares from './MarchingSquares';
import BoundingBox from './BoundingBox';
import Voxel from './Voxel';

import './App.less';

const block = 'app';

export default function App() {
  return (
    <div className={block}>
      <Voxel />
      <MarchingSquares />
      <BoundingBox />
    </div>
  );
}
