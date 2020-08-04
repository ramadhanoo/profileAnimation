import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Home from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

 const AppCon = createStackNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile
  }
});

const NavAction = createAppContainer(AppCon)

export default class App extends Component {

  render() {
    return (
      <NavAction />
    );
  }
}
