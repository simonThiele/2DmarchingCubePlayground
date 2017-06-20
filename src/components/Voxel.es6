import React from 'react';

import { voxelData } from '../voxel';

import './Voxel.less';

const block = 'voxel';

export default function Voxel() {
  return (
    <div className={block}>
      {voxelData.map(v =>
        <div key={v.id} className={`${block}__single`} style={{
          background: v.marked ? '#00ff84' : '#777',
          left: `${v.x}%`,
          top: `${v.y}%`
        }} />
      )}
    </div>
  );
}
