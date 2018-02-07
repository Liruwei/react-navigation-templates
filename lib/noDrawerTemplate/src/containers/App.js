import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {RootNavigator, middleware} from './navigators';


const store = createStore(reducer, applyMiddleware(middleware, thunk, logger));

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
