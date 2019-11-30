import * as React from 'react';
import margeClassNames from 'classnames';
import { Notification } from '../../common/components/Notification';
import { Loader } from '../../common/components/Loader';
import { mockNotifications } from './mockNotifications';
import { notificationTypes } from './constants';

export const Notifications = () => {
  const [isLoader, setIsLoader] = React.useState(true);
  const [currentFilterType, setCurrentFilterType] = React.useState(notificationTypes[0]);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 700);
  }, []);

  const notificationList = isLoader ? (
    <Loader />
  ) : (
    mockNotifications
      .filter(v => v.type === currentFilterType.type)
      .map((v, i) => <Notification key={i.toString()} data={v} />)
  );

  return (
    <div className="notification-page">
      <div className="wrapper">
        <aside className="select-type">
          {notificationTypes.map((v, i) => (
            <div
              className={margeClassNames('type-item', {
                active: v.type === currentFilterType.type,
              })}
              key={i.toString()}
              onClick={() => setCurrentFilterType(v)}
            >
              {v.text}
            </div>
          ))}
        </aside>
        <div className="notification-list">{notificationList}</div>
      </div>
    </div>
  );
};
