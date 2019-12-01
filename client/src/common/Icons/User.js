import React from 'react';

const SvgUser = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 29} height={svgHeight || 40}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      // eslint-disable-next-line max-len
      d="M22.4 9.583c0 5.293-3.403 9.584-7.6 9.584-4.197 0-7.6-4.291-7.6-9.584C7.2 4.291 8.317 0 14.8 0s7.6 4.29 7.6 9.583zm-3.825 11.25c8.904 1.653 10.068 4.264 10.209 13.425.009.586.014.688.016.636v.711S26.68 40 14.4 40C2.121 40 .001 35.605.001 35.605L0 34.643c.002.084.008.046.022-.682.162-8.921 1.397-11.493 10.203-13.128 0 0 1.254 1.643 4.175 1.643s4.175-1.643 4.175-1.643z"
      fill={color || '#414B50'}
    />
  </svg>
);

export default SvgUser;
