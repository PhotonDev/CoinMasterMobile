import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Profile extends Component {

  render () {
    return (
      <View>
          <Text>Profile Component</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent ('Profile', () => Profile);