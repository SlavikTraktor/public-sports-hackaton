import React from "react";

const SvgArrow = ({ width, height, color }) => (
  <svg width={width || 20} height={height || 33}>
    <path
      d="M0 29.123L12.362 16.5 0 3.878 3.806 0 20 16.5 3.806 33z"
      fill={color || '#fff'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgArrow;
