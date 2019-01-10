import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import AppNavigator from './src/_navigators'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'
import store from './src/_redux/store'
import {connect, Provider} from 'react-redux'

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}
