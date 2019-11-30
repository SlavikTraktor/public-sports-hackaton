import React from "react";

const SvgFootball = ({ width, height, color }) => (
  <svg width={width || 34} height={height || 34}>
    <path
      // eslint-disable-next-line max-len
      d="M16.5 0C7.392 0 0 7.392 0 16.5S7.392 33 16.5 33 33 25.608 33 16.5 25.608 0 16.5 0zm1.65 5.445l2.227-1.568a13.217 13.217 0 017.228 5.512l-.644 2.21-2.227.76-6.584-4.604v-2.31zm-5.527-1.568l2.227 1.568v2.31l-6.583 4.603-2.228-.759-.644-2.21a13.37 13.37 0 017.228-5.511zM8.382 24.932l-1.881.165A13.098 13.098 0 013.3 16.5c0-.198.016-.38.033-.578l1.65-1.204 2.277.792 2.409 7.161-1.287 2.26zm12.243 4.091a13.18 13.18 0 01-4.125.677 13.18 13.18 0 01-4.125-.677l-1.139-2.458 1.056-1.815h8.432l1.056 1.831-1.155 2.442zm-.38-7.573h-7.49l-2.228-6.633 5.973-4.191 5.99 4.191-2.244 6.633zm6.254 3.646l-1.881-.165-1.303-2.26 2.409-7.161 2.293-.775 1.65 1.204c.017.181.033.363.033.561 0 3.284-1.204 6.286-3.201 8.596z"
      fill={color || '#fff'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgFootball;