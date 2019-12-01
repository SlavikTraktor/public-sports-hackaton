import React from 'react';

const SvgArrow = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 20} height={svgHeight || 33}>
    <path
      d="M0 29.123L12.362 16.5 0 3.878 3.806 0 20 16.5 3.806 33z"
      fill={color || '#FFF'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgArrow;
