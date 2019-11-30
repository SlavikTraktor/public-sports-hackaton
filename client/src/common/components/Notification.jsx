import * as React from 'react';
import moment from 'moment';
import { Icon } from '../utils/Icon';

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
    <div className="trash-icon">
      <Icon name="trashbox" />
    </div>
  </div>
);
