import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from '../common/components/Navigation';
import { Notifications } from '../pages/Notifications';
import { Search } from '../pages/Search';

const Spots = () => <div/>;
const MapPage = () => <div/>;
const Profile = () => <div/>;

export const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/notifications" component={Notifications} />
      <Route path="/spots" component={Spots} />
      <Route path="/search" component={Search} />
      <Route path="/map" component={MapPage} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
);
