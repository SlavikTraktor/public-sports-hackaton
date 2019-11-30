import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Notifications } from '../pages/Notifications';
import { MapPage } from '../pages/MapPage';
import { Search } from '../pages/Search';
import { UserProfile } from '../pages/UserProfile';
import { SpotsPage } from '../pages/Spots';
import { URLS } from '../common/constants/constants';

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path={URLS.NOTIFICATION_PAGE} component={Notifications} />
      <Route path={URLS.SPOTS_PAGE} component={SpotsPage} />
      <Route path={URLS.SERCH_PAGE} component={Search} />
      <Route path={URLS.MAP_PAGE} component={MapPage} />
      <Route path={URLS.PROFILE_PAGE} component={UserProfile} />
    </Switch>
  </Router>
);
