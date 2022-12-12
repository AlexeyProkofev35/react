import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {store} from '../src/store/store'

import {GlobalProvider} from '../src/context/GlobalContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Provider>
);
