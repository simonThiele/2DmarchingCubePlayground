import React from 'react';

import { voxelData } from '../voxel';

import './BoundingBox.less';

const block = 'bounding-box';

export default function BoundingBox() {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  voxelData.forEach(voxel => {
    if (!voxel.marked) {
      return;
    }
    minX = Math.min(minX, voxel.x);
    maxX = Math.max(maxX, voxel.x);
    minY = Math.min(minY, voxel.y);
    maxY = Math.max(maxY, voxel.y);
  });

  return (
    <div className={block} style={{
      left: `${minX}%`,
      top: `${minY}%`,
      width: `calc(${maxX - minX}% + 19px)`,
      height: `calc(${maxY - minY}% + 19px)`,
    }}/>
  );
}
