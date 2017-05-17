import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import * as React from 'react';
import reducer from './reducers/RootReducer';
import {App} from './components/App';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
