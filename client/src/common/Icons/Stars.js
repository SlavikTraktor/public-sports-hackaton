import React from 'react';

const SvgStars = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 35} height={svgHeight || 35}>
    {/* eslint-disable-next-line react/no-unknown-property */}
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        id="Spot-Page"
        transform="translate(-542.000000, -610.000000)"
        fill={color}
        stroke="#FFDF00"
      >
        <g id="rating" transform="translate(242.000000, 536.000000)">
          <g id="football-rating" transform="translate(0.000000, 60.000000)">
            <g id="stars" transform="translate(257.000000, 14.000000)">
              <polygon
                id="Star"
                // eslint-disable-next-line max-len
                points="59.5 24.75 49.8015433 29.8487804 51.6537837 19.0493902 43.8075675 11.4012196 54.6507717 9.8256098 59.5 0 64.3492283 9.8256098 75.1924325 11.4012196 67.3462163 19.0493902 69.1984567 29.8487804"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgStars;
