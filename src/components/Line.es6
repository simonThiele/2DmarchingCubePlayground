import React from 'react';

import './Line.less';

const block = 'line';

const lineLUT = [
  [], // 0
  [0, 50, 50, 100], // 1
  [50, 100, 100, 50], // 2
  [0, 50, 100, 50], // 3
  [50, 0, 100, 50], // 4
  [0, 50, 50, 0, 50, 100, 100, 50], // 5
  [50, 0, 50, 100], // 6
  [50, 0, 0, 50], // 7
  [50, 0, 0, 50], // 8
  [50, 0, 50, 100], // 9
  [50, 0, 100, 50, 0, 50, 50, 100], // 10
  [50, 0, 100, 50], // 11
  [0, 50, 100, 50], // 12
  [50, 100, 100, 50], // 13
  [0, 50, 50, 100] // 14
];

export default class extends React.Component {
  static displayName = 'Line';

  componentDidMount() {
    const { type } = this.props;
    const canvas = this.refs.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const lineConfig = lineLUT[type];
    const ctx = canvas.getContext('2d');

    for (let i = 0, length = lineConfig.length; i < length; i += 4) {
      ctx.beginPath();
      ctx.moveTo(lineConfig[i] / 100 * width, lineConfig[i + 1] / 100 * height);
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#ffffff';
      ctx.lineTo(lineConfig[i + 2] / 100 * width, lineConfig[i + 3] / 100 * height);
      ctx.stroke();
    }
  }

  render() {
    return <canvas ref="canvas" className={block} />;
  }
}
