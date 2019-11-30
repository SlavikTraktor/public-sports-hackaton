import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import { App } from './App';
import { store } from './store';

import './scss/index.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
