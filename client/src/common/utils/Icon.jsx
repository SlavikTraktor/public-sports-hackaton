import * as React from 'react';
import Arrow from '../Icons/Arrow';
import Map from '../Icons/Map';
import Pointer from '../Icons/Pointer';
import Search from '../Icons/Search';
import Trashbox from '../Icons/Trashbox';
import Users from '../Icons/Users';

export const Icon = ({
  name, width, height, color,
}) => {
  switch (name) {
    case 'arrow':
      return <Arrow width={width} height={height} color={color} />;

    case 'map':
      return <Map width={width} height={height} color={color} />;

    case 'pointer':
      return <Pointer width={width} height={height} color={color} />;

    case 'search':
      return <Search width={width} height={height} color={color} />;

    case 'trashbox':
      return <Trashbox width={width} height={height} color={color} />;

    case 'users':
      return <Users width={width} height={height} color={color} />;

    default:
      return null;
  }
};
