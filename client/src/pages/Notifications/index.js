import * as React from 'react';
import { Notification } from '../../common/components/Notification';
import { Loader } from '../../common/components/Loader';
import { mockNotifications } from './mockNotifications';

export const Notifications = () => {
  const [isLoader, setIsLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 700);
  }, []);

  const notificationList = isLoader ? (
    <Loader />
  ) : (
    mockNotifications.map((v, i) => <Notification key={i.toString()} data={v} />)
  );

  return (
    <div className="notification-page">
      <div className="wrapper">
        <aside className="select-type">
          <div className="type-item active">Площадки</div>
          <div className="type-item">Друзья</div>
          <div className="type-item">Другое</div>
        </aside>
        <div className="notification-list">{notificationList}</div>
      </div>
    </div>
  );
};
