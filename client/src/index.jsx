import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import { UserProfile } from './pages/UserProfile';
import { store } from './store';

import './scss/index.scss';

render(
  <Provider store={store}>
    <UserProfile />
  </Provider>,
  document.getElementById('root'),
);
