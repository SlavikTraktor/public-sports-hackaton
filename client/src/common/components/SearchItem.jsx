import * as React from 'react';
import { Icon } from '../utils/Icon';
import { SportIcons } from '../utils/SportIcons';

export const SearchItem = ({ user, spot }) => {
  if (user) {
    return (
      <div className="search-item-wrapper">
        <div className="flex-part">
          <div className="avatar"></div>
          <span>
            {user.name}
            <small>{user.id}</small>
          </span>
        </div>
        <div className="flex-part interests">
          <SportIcons sports={['football', 'basketball']} />
        </div>
        <div className="flex-part">
          <div className="arrow-icon">
            <Icon name="arrow" />
          </div>
        </div>
      </div>
    );
  }

  if (spot) {
    return (
      <div className="search-item-wrapper">
        <div className="flex-part">
          <span>
            {spot.name}
            <small>{spot.id}</small>
          </span>
        </div>
        <div className="flex-part">
          <div className="pointer-icon">
            <Icon name="pointer" />
          </div>
          <span>{spot.address}</span>
        </div>
        <div className="flex-part">
          <div className="users-icon">
            <Icon name="users" />
          </div>
          <span>{spot.count}</span>
          <div className="arrow-icon">
            <Icon name="arrow" />
          </div>
        </div>
      </div>
    );
  }

  return null;
};
