import * as React from 'react';
import margeClassNames from 'classnames';
import { SearchItem } from '../common/components/SearchItem';
import { Icon } from '../common/utils/Icon';

export const Search = () => {
  const [isAnimated, setIsAnimated] = React.useState(false);

  const onInputChange = () => {
    if (!isAnimated) {
      setIsAnimated(true);
    }
  };
  const user = { id: '#00001', name: 'Ivan Ivanov', interests: ['football', 'basketball'] };
  const spot = {
    id: '#00001',
    name: 'spot name',
    address: 'spot address',
    count: 8,
  };

  const inputWrapperClass = margeClassNames('input-wrapper', {
    focus: isAnimated,
  });

  const searchResultClass = margeClassNames('search-result', {
    hidden: !isAnimated,
  });

  return (
    <div className="search-wrapper">
      <div className={inputWrapperClass}>
        <input type="text" placeholder="Введите запрос" onChange={e => onInputChange(e.target)} />
        <button type="button">
          <Icon name="search" svgWidth={44} svgHeight={44} color="#FFF" />
        </button>
      </div>
      <div id="result" className={searchResultClass}>
        <SearchItem spot={spot} />
        <SearchItem user={user} />
      </div>
    </div>
  );
};
