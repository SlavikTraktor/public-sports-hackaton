import * as React from 'react';
import moment from 'moment';

export const Notification = ({ name, date, text }) => (
  <div className="notification">
    <div className="notification-content">
      <div className="notification-header">
        <h3 className="title">{name}</h3>
        <div className="time">
          {moment(date)
            .lang('ru')
            .fromNow()}
        </div>
      </div>
      <div className="notification-body">{text}</div>
    </div>
    <div className="notification-icons">
      <div className="trash-icon" />
    </div>
  </div>
);
