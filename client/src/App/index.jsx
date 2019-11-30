import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Notifications } from '../pages/Notifications';
import { MapPage } from '../pages/MapPage';
import { Search } from '../pages/Search';
import { UserProfile } from '../pages/UserProfile';

const Spots = () => <div />;

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/notifications" component={Notifications} />
      <Route path="/spots" component={Spots} />
      <Route path="/search" component={Search} />
      <Route path="/map" component={MapPage} />
      <Route path="/profile" component={UserProfile} />
    </Switch>
  </Router>
);
