import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../utils/Icon';
import { URLS } from '../constants/constants';

export const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <div className="main-nav">
          <Link to={URLS.NOTIFICATION_PAGE} className="nav-item active">
            Уведомления
          </Link>
          <Link to={URLS.SPOTS_PAGE} className="nav-item active">
            Подписки
          </Link>
          <Link to={URLS.PROFILE_PAGE} className="nav-item active">
            Профиль
          </Link>
        </div>
        <div className="main-nav">
          <Link to={URLS.MAP_PAGE} className="nav-icon">
            <Icon name="map" width={40} height={40} />
          </Link>
          <div className="nav-separator" />
          <Link to={URLS.SERCH_PAGE} className="nav-icon">
            <Icon name="search" width={40} height={40} />
          </Link>
        </div>
      </nav>
    </div>
  </header>
);
