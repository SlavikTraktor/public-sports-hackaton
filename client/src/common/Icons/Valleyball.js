import React from 'react';

const SvgValleyball = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 34} height={svgHeight || 34}>
    <path
      // eslint-disable-next-line max-len
      d="M6.6 3.316v16.995l-5.131 2.97A16.409 16.409 0 010 16.5C0 11.105 2.607 6.336 6.6 3.316zm8.25 12.227L9.9 18.414V1.386A16.475 16.475 0 0114.85.082v15.461zm1.65 2.855l4.95 2.87L6.716 29.75a16.32 16.32 0 01-3.598-3.63L16.5 18.399zm1.65-8.564l14.735 8.514a16.461 16.461 0 01-1.354 4.917L18.15 15.543V9.834zM10.016 31.68l14.734-8.514 5.131 2.97C26.88 30.278 22.011 33 16.5 33c-2.31 0-4.488-.478-6.484-1.32zm22.852-17.143L18.15 6.023V.083c7.689.758 13.81 6.814 14.718 14.454z"
      fill={color || '#FFF'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgValleyball;
