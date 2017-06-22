export default function march(voxelData) {
  const lines = [];

  for (let iRow = 0, length = voxelData.length - 1; iRow < length; iRow++) {
    const row = voxelData[iRow];
    for (let iV = 0, length = row.length - 1; iV < length; iV++) {
      // v1 v2
      // v3 v4
      const v1 = row[iV];
      const v2 = row[iV + 1];
      const v3 = voxelData[iRow + 1][iV + 1];
      const v4 = voxelData[iRow + 1][iV];

      const line = LUT[v1.marker][v2.marker][v3.marker][v4.marker];
      if (line) {
        lines.push({
          v1,
          v2,
          v3,
          v4,
          type: line
        });
      }
    }
  }

  return lines;
}

const LUT = [
  [
    // 0
    [
      // 00
      [
        // 000
        null, // 0000
        1 // 0001
      ],
      [
        // 001
        2, // 0010
        3 // 0011
      ]
    ],
    [
      // 01
      [
        // 010
        4, // 0100
        5 // 0101
      ],
      [
        // 011
        6, // 0110
        7 // 0111
      ]
    ]
  ],
  [
    // 1
    [
      // 10
      [
        // 100
        8, // 1000
        9 // 1001
      ],
      [
        // 101
        10, // 1010
        11 // 1011
      ]
    ],
    [
      // 11
      [
        // 110
        12, // 1100
        13 // 1101
      ],
      [
        // 111
        14, // 1110
        null // 1111
      ]
    ]
  ]
];
