import * as React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Notifications } from '../pages/Notifications';
import { MapPage } from '../pages/MapPage';
import { Search } from '../pages/Search';
import { UserProfile } from '../pages/UserProfile';
import { SpotList } from '../pages/SpotList';
import { URLS } from '../common/constants/constants';
import { Spot } from '../pages/Spot';

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path={URLS.MAIN_PAGE} exact>
        <Redirect push to={URLS.MAP_PAGE} />
      </Route>
      <Route path={URLS.NOTIFICATION_PAGE} component={Notifications} />
      <Route path={URLS.SPOTS_PAGE} component={SpotList} />
      <Route path={URLS.SERCH_PAGE} component={Search} />
      <Route path={URLS.MAP_PAGE} component={MapPage} />
      <Route path={URLS.PROFILE_PAGE} component={UserProfile} />
      <Route path={URLS.SPOT_PROFILE} component={Spot} />
    </Switch>
  </Router>
);
