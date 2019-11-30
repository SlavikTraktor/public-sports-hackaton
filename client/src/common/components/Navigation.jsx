import * as React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
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
          <Link to="/search" className="nav-item">
            Профиль
          </Link>
        </div>
        <div className="main-nav">
          <div className="nav-icon-wrap">
            <Link to="/map" className="nav-map nav-icon">
              &nbsp;
            </Link>
          </div>
          <div className="nav-separator" />
          <div className="nav-icon-wrap">
            <Link to="/profile" className="nav-search nav-icon">
              &nbsp;
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
);
