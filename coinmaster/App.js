import React from 'react';
import { AppRegistry } from 'react-native';

import TabNavigation from './src/navigation/TabNavigation/TabNavigation';

export default class App extends React.Component {
  render() {
    return (
      <TabNavigation />
    );
  }
}

AppRegistry.registerComponent ('App', () => App);