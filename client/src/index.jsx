import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import { MapPage } from './pages/MapPage';
import { store } from './store';

import './scss/index.scss';

render(
  <Provider store={store}>
    <MapPage />
  </Provider>,
  document.getElementById('root'),
);
