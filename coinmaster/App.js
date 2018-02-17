import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import 'expo';

import * as firebase from "firebase";

import TabNavigation from './src/navigation/TabNavigation/TabNavigation';
import StackNavigation from './src/navigation/StackNavigation/StackNavigation';

import Login from './src/components/Login/Login';

export default class App extends React.Component {
  state = {
    loggedIn : false
  };

  componentWillMount () {
    firebase.auth().onAuthStateChanged( user =>
      this.setState({loggedIn: !!user})
    );
  }

  render() {
    return (
      <View style = { styles.container }>
        {this.state.loggedIn && 
          <TabNavigation /> || 
          <StackNavigation /> }

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex : 1
  }
});

AppRegistry.registerComponent ('App', () => App);