import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import { Notifications } from './pages/Notifications';
import { store } from './store';

import './scss/index.scss';

render(
  <Provider store={store}>
    <Notifications />
  </Provider>,
  document.getElementById('root'),
);
