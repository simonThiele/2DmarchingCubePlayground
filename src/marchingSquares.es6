export default function march(voxelData) {
  for (let iRow = 0, length = voxelData.length - 1; iRow < length; iRow++) {
    const row = voxelData[iRow];
    for (let iV = 0, length = row.length - 1; iV < length; iV++) {
      // v1 v2
      // v3 v4
      const v1 = row[iV];
      const v2 = row[iV + 1];
      const v3 = voxelData[iRow + 1][iV];
      const v4 = voxelData[iRow + 1][iV + 1];
    }
  }

  return 'bert';
}

const LUT = {};
