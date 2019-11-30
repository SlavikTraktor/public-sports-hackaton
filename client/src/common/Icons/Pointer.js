import React from "react";

const SvgPointer = ({ width, height, color }) => (
  <svg width={width || 31} height={height || 40}>
    <path
      // eslint-disable-next-line max-len
      d="M15.142 40S30.4 23.73 30.4 15.335C30.4 6.882 23.555 0 15.142 0 6.787 0 0 6.882 0 15.335c0 5.657 6.903 14.87 11.312 20.232L15.142 40zm-.312-29.804c2.852 0 5.17 2.329 5.17 5.184 0 2.68-2.318 5.012-5.17 5.012-2.793 0-5.23-2.329-5.23-5.012 0-2.855 2.437-5.184 5.23-5.184z"
      fill={color || '#fff'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgPointer;
