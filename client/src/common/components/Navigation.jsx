import * as React from 'react';

export const Navigation = () => (
  <header>
    <div className="wrapper">
      <nav>
        <div className="main-nav">
          <a href="/" className="nav-item active">
            Уведомления
          </a>
          <a href="/" className="nav-item">
            Подписки
          </a>
          <a href="/" className="nav-item">
            Профиль
          </a>
        </div>
        <div className="main-nav">
          <a href="/" className="nav-map nav-icon">
            &nbsp;
          </a>
          <div className="nav-separator" />
          <a href="/" className="nav-search nav-icon">
            &nbsp;
          </a>
        </div>
      </nav>
    </div>
  </header>
);
