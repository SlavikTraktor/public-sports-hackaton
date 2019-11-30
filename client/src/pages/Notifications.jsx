import * as React from 'react';
import { Navigation } from '../common/components/Navigation';
import { Notification } from '../common/components/Notification';

export const Notifications = () => (
  <div className="notification-page">
    <div className="wrapper">
      <aside className="select-type">
        <div className="type-item active">Площадки</div>
        <div className="type-item">Друзья</div>
        <div className="type-item">Другое</div>
      </aside>
      <div className="notification-list">
        <Notification
          name="author"
          text="Площадка закрыта на ремонт"
          date="2019-11-30T13:17:23+03:00"
        />
      </div>
    </div>
  </div>
);
