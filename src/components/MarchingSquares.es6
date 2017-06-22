import React from 'react';

import march from '../marchingSquares';
import { voxelData } from '../voxel';
import Line from './Line';

import './MarchingSquares.less';

const block = 'marching-squares';

export default function MarchingSquares() {
  const lines = march(voxelData);
  return (
    <div className={block}>
      {lines.map((line, i) => {
        return (
          <div
            key={i}
            className={`${block}__line`}
            style={{
              left: `${line.v1.x}%`,
              top: `${line.v1.y}%`,
              width: `calc(${line.v2.x - line.v1.x}% - 20px)`,
              height: `calc(${line.v4.y - line.v1.y}% - 20px)`
            }}
          >
            <Line type={line.type} />
          </div>
        );
      })}
    </div>
  );
}
