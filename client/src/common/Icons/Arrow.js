import React from 'react';

const SvgArrow = ({ svgWidth = 20, svgHeight = 33, color = '#FFF' }) => (
  <svg width={svgWidth} height={svgHeight}>
    <path
      d="M0 29.123L12.362 16.5 0 3.878 3.806 0 20 16.5 3.806 33z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgArrow;
