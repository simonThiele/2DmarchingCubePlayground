import React from 'react';

import { voxelData } from '../voxel';

import './Voxel.less';

const block = 'voxel';

export default function App() {
  return (
    <div className={block}>
      {voxelData.map((row, ir) =>
        <div key={`${row}_${ir}`} className={`${block}__row`}>
          {row.map(v => <div key={v.id} className={`${block}__single`} style={{
            background: v.marked ? '#00ff84' : '#777'
          }} />)}
        </div>
      )}
    </div>
  );
}
