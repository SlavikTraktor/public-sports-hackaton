import * as React from 'react';
import Basketball from '../Icons/Basketball';
import Football from '../Icons/Football';
import Valleyball from '../Icons/Valleyball';
import Workout from '../Icons/Workout';

export const SportIcons = ({
  sports, svgWidth, svgHeight, color,
}) => sports.map((sportName, i) => {
  switch (sportName) {
    case 'football':
      return (
        <Football key={i.toString()} svgWidth={svgWidth} svgHeight={svgHeight} color={color} />
      );
    case 'basketball':
      return (
        <Basketball key={i.toString()} svgWidth={svgWidth} svgHeight={svgHeight} color={color} />
      );
    case 'valleyball':
      return (
        <Valleyball key={i.toString()} svgWidth={svgWidth} svgHeight={svgHeight} color={color} />
      );
    case 'workout':
      return (
        <Workout key={i.toString()} svgWidth={svgWidth} svgHeight={svgHeight} color={color} />
      );
    default:
      return null;
  }
});
