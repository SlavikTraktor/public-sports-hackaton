import React from 'react';

const SvgBasketball = ({ svgWidth, svgHeight, color }) => (
  <svg width={svgWidth || 34} height={svgHeight || 34}>
    <path
      // eslint-disable-next-line max-len
      d="M25.653 15.3a10.178 10.178 0 015.644-7.48 16.917 16.917 0 012.618 7.48h-8.262zm-17.306 0H.085a16.917 16.917 0 012.618-7.48 10.178 10.178 0 015.644 7.48zm13.872 0H18.7V.085A16.947 16.947 0 0129.121 5.1c-3.706 2.057-6.358 5.797-6.902 10.2zm-10.438 0c-.544-4.403-3.196-8.143-6.902-10.2A16.904 16.904 0 0115.3.085V15.3h-3.519zm10.438 3.4c.544 4.403 3.196 8.143 6.902 10.2A16.904 16.904 0 0118.7 33.915V18.7h3.519zM2.703 26.18A16.917 16.917 0 01.085 18.7h8.262c-.561 3.298-2.72 6.069-5.644 7.48zm22.95-7.48h8.262a16.917 16.917 0 01-2.618 7.48 10.178 10.178 0 01-5.644-7.48zm-13.872 0H15.3v15.215A16.947 16.947 0 014.879 28.9c3.706-2.057 6.358-5.797 6.902-10.2z"
      fill={color || '#FFF'}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgBasketball;
