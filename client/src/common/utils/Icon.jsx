import * as React from 'react';
import Arrow from '../Icons/Arrow';
import Map from '../Icons/Map';
import Pointer from '../Icons/Pointer';
import Search from '../Icons/Search';
import Trashbox from '../Icons/Trashbox';
import Users from '../Icons/Users';

export const Icon = ({
  name, svgWidth, svgHeight, color,
}) => {
  switch (name) {
    case 'arrow':
      return <Arrow svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;

    case 'map':
      return <Map svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;

    case 'pointer':
      return <Pointer svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;

    case 'search':
      return <Search svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;

    case 'trashbox':
      return <Trashbox svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;

    case 'users':
      return <Users svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;

    default:
      return null;
  }
};
