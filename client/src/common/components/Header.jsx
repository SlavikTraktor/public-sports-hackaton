import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../utils/Icon';
import { URLS } from '../constants/constants';

export const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <div className="main-nav">
          <NavLink to={URLS.NOTIFICATION_PAGE} activeClassName="active" className="nav-item">
            Уведомления
          </NavLink>
          <NavLink to={URLS.SPOTS_PAGE} activeClassName="active" className="nav-item">
            Подписки
          </NavLink>
          <NavLink to={URLS.PROFILE_PAGE} activeClassName="active" className="nav-item">
            Профиль
          </NavLink>
        </div>
        <div className="main-nav">
          <NavLink to={URLS.MAP_PAGE} activeClassName="active" className="nav-icon">
            <Icon name="map" width={40} height={40} />
          </NavLink>
          <div className="nav-separator" />
          <NavLink to={URLS.SERCH_PAGE} activeClassName="active" className="nav-icon">
            <Icon name="search" width={40} height={40} />
          </NavLink>
        </div>
      </nav>
    </div>
  </header>
);
