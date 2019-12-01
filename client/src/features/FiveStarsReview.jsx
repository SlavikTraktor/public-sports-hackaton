import * as React from 'react';
import { SportIcons } from '../common/utils/SportIcons';
import { Icon } from '../common/utils/Icon';

export const FiveStarsReview = ({ raiting, sport, onChoose }) => {
  const [chooseValue, setChooseValue] = React.useState(0);
  const [resultValue, setResultValue] = React.useState();

  const onChooseValue = (val) => {
    setResultValue(val);

    onChoose(val);
  };

  const curval = resultValue || chooseValue;

  return (
    <div className="block">
      <div className="icon">
        <SportIcons sports={[sport]} />
      </div>
      <div className="five-stars">
        {[...new Array(5)].map((_, i) => (
          <span
            onClick={() => onChooseValue(i + 1)}
            onMouseEnter={() => setChooseValue(i + 1)}
            onMouseLeave={() => setChooseValue(0)}
            key={i.toString()}
          >
            <Icon name="star" color={i + 1 <= curval ? '#FFDF00' : null} />
          </span>
        ))}
      </div>
      <div className="text">{raiting}</div>
    </div>
  );
};
