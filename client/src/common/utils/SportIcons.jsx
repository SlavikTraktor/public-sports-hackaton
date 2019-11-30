import * as React from 'react';
import Basketball from '../Icons/Basketball';
import Football from '../Icons/Football';
import Valleyball from '../Icons/Valleyball';
import Workout from '../Icons/Workout';

export const SportIcons = ({
  sports, svgWidth, svgHeight, color,
}) => sports.map((sportName) => {
  switch (sportName) {
    case 'football':
      return <Football svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;
    case 'basketball':
      return <Basketball svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;
    case 'valleyball':
      return <Valleyball svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;
    case 'workout':
      return <Workout svgWidth={svgWidth} svgHeight={svgHeight} color={color} />;
    default:
      return null;
  }
});
