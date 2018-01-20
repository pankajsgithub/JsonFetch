import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './src/app';
import reducer from './src/reducers/counterReducer';

const store = createStore(reducer);

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('ReduxCounter', () => AppContainer);
