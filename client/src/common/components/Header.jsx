import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../utils/Icon';
import * as Consts from '../constants/constants';

export const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <div className="main-nav">
          <Link to={Consts.$NotificatinosLink} className="nav-item active">
            Уведомления
          </Link>
          <Link to={Consts.$SpotsLink} className="nav-item active">
            Подписки
          </Link>
          <Link to={Consts.$UserProfileLink} className="nav-item active">
            Профиль
          </Link>
        </div>
        <div className="main-nav">
          <Link to={Consts.$MapPageLink} className="nav-icon">
            <Icon name="map" width={40} height={40} />
          </Link>
          <div className="nav-separator" />
          <Link to={Consts.$SearchLink} className="nav-icon">
            <Icon name="search" width={40} height={40} />
          </Link>
        </div>
      </nav>
    </div>
  </header>
);
