import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers';
import TodoContainer from './src/containers/TodoContainer.js';
import Drawer from './src/navigations/Drawer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <Drawer />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('todoApp', () => App);