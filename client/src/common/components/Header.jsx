import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <div className="main-nav">
          <Link to="/notifications" className="nav-item active">
            Уведомления
          </Link>
          <Link to="/spots" className="nav-item active">
            Подписки
          </Link>
          <Link to="/search" className="nav-item active">
            Профиль
          </Link>
        </div>
        <div className="main-nav">
          <Link to="/map" className="nav-map nav-icon">
            &nbsp;
          </Link>
          <div className="nav-separator" />
          <Link to="/profile" className="nav-search nav-icon">
            &nbsp;
          </Link>
        </div>
      </nav>
    </div>
  </header>
);
