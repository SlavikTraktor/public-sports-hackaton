import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import { Notification } from './pages/Notification';
import { store } from './store';

import './scss/index.scss';

render(
  <Provider store={store}>
    <Notification />
  </Provider>,
  document.getElementById('root'),
);
