import React from 'react';

const SvgCreate = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 24} height={svgHeight || 24}>
    <path
      // eslint-disable-next-line max-len
      d="M0 19v5h5L19.743 9.255l-5-4.999L0 19.001zM23.61 5.39c.52-.52.52-1.36 0-1.88L20.49.39c-.52-.52-1.36-.52-1.88 0l-2.439 2.44 5 4.999 2.44-2.44z"
      fill={color || '#414B50'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgCreate;
