import React from 'react';

import Voxel from './Voxel';

import './App.less';

const block = 'app';

export default function App() {
  return (
    <div className={block}>
      <Voxel />
    </div>
  );
}
