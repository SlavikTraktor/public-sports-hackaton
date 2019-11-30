import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../utils/Icon';

export const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <div className="main-nav">
          <Link to="/notifications" className="nav-item active">
            Уведомления
          </Link>
          <Link to="/spots" className="nav-item">
            Подписки
          </Link>
          <Link to="/profile" className="nav-item">
            Профиль
          </Link>
        </div>
        <div className="main-nav">
          <Link to="/map" className="nav-icon">
            <Icon name="map" width={40} height={40} />
          </Link>
          <div className="nav-separator" />
          <Link to="/search" className="nav-icon">
            <Icon name="search" width={40} height={40} />
          </Link>
        </div>
      </nav>
    </div>
  </header>
);
