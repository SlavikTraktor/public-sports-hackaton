import React from 'react';

const SvgSearch = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 40} height={svgHeight || 40}>
    <path
      // eslint-disable-next-line max-len
      d="M28.588 25.716H26.78l-.64-.625a15.068 15.068 0 003.59-9.784c0-8.303-6.655-15.034-14.865-15.034S0 7.003 0 15.307s6.655 15.035 14.866 15.035c3.682 0 7.067-1.365 9.674-3.632l.617.648v1.827l11.435 11.542L40 37.281 28.588 25.716zm-13.722 0c-5.695 0-10.292-4.65-10.292-10.409C4.574 9.547 9.171 4.9 14.866 4.9c5.694 0 10.291 4.649 10.291 10.408 0 5.76-4.597 10.409-10.291 10.409z"
      fill={color || '#B2CAD6'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgSearch;
