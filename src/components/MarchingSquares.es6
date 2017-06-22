import React from 'react';

import march from '../marchingSquares';
import { voxelData } from '../voxel';

import './MarchingSquares.less';

const block = 'marching-squares';

export default function MarchingSquares() {
  const lines = march(voxelData);
  console.log('result', lines);
  return <div className={block} />;
}
