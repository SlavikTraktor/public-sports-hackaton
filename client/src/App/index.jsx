import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Notifications } from '../pages/Notifications';
import { MapPage } from '../pages/MapPage';
import { Search } from '../pages/Search';
import { UserProfile } from '../pages/UserProfile';
import * as Consts from '../common/constants/constants';

const Spots = () => <div />;

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path={Consts.$NotificatinosLink} component={Notifications} />
      <Route path={Consts.$SpotsLink} component={Spots} />
      <Route path={Consts.$SearchLink} component={Search} />
      <Route path={Consts.$MapPageLink} component={MapPage} />
      <Route path={Consts.$UserProfileLink} component={UserProfile} />
    </Switch>
  </Router>
);
