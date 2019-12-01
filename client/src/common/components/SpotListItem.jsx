import * as React from 'react';
import { Icon } from '../utils/Icon';
import { SportIcons } from '../utils/SportIcons';

export const SpotListItem = ({ spot }) => {
  const {
    name, id, address, sports, count,
  } = spot;

  return (
    <div className="spotlistblock">
      <a href={`./spot/${id}`}>
        <div className="header">
          <div className="title">{name}</div>
          <div className="id">{`#00000${id}`}</div>
        </div>
      </a>
      <div className="body">
        <div className="line">
          <Icon name="users" svgWidth={45} color="#414b50" />
          <div className="text">{"Человек на площадке: " + count}</div>
        </div>
        <div className="line">
          <Icon name="pointer" svgWidth={38} color="#414b50" />
          <div className="text">{address}</div>
        </div>
        <div className="icon-panel">
          <SportIcons sports={sports} />
        </div>
      </div>
    </div>
  );
};
