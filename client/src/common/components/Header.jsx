import * as React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={Consts.$MapPageLink} className="nav-map nav-icon">
            &nbsp;
          </Link>
          <div className="nav-separator" />
          <Link to={Consts.$SearchLink} className="nav-search nav-icon">
            &nbsp;
          </Link>
        </div>
      </nav>
    </div>
  </header>
);
