import * as React from 'react';
import Basketball from '../Icons/Basketball';
import Football from '../Icons/Football';
import Valleyball from '../Icons/Valleyball';
import Workout from '../Icons/Workout';

export const SportIcons = ({
  sports, width, height, color,
}) => {
  return sports.map((sportName) => {
    switch (sportName) {
      case 'football':
        return <Football width={width} height={height} color={color} />;

      case 'basketball':
        return <Basketball width={width} height={height} color={color} />;

      case 'valleyball':
        return <Valleyball width={width} height={height} color={color} />;

      case 'workout':
        return <Workout width={width} height={height} color={color} />;
      default:
        return null;
    }
  });
};
