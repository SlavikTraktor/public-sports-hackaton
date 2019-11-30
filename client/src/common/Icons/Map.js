import React from "react";

const SvgMap = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 34} height={svgHeight || 34}>
    <path
      // eslint-disable-next-line max-len
      d="M38.889.273l-.356.067-11.866 4.652L13.333.272.8 4.543c-.467.158-.8.563-.8 1.08v33.982c0 .629.489 1.123 1.111 1.123l.356-.067 11.866-4.652 13.334 4.72 12.533-4.27c.467-.158.8-.563.8-1.08V1.396c0-.629-.489-1.123-1.111-1.123zm-12.222 35.96L13.333 31.49V4.768L26.667 9.51v26.722z"
      fill={color || '#B2CAD6'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgMap;
