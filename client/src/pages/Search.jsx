import * as React from 'react';
import { SearchItem } from '../common/components/SearchItem';
import { Icon } from '../common/utils/Icon';

export const Search = () => {
  const onInputFocus = (e) => {
    document.getElementById('result').classList.toggle('hidden');

    e.parentElement.classList.toggle('focus');
  };
  const user = { id: '#00001', name: 'Ivan Ivanov', interests: ['football', 'basketball'] };
  const spot = {
    id: '#00001',
    name: 'spot name',
    address: 'spot address',
    count: 8,
  };

  return (
    <div className="search-wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Введите запрос"
          onBlur={e => onInputFocus(e.target)}
          onFocus={e => onInputFocus(e.target)}
        />
        <button type="button">
          <Icon name="search" svgWidth={44} svgHeight={44} color="#FFF" />
        </button>
      </div>
      <div id="result" className="search-result hidden">
        <SearchItem spot={spot} />
        <SearchItem user={user} />
      </div>
    </div>
  );
};
