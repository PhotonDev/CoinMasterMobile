import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Database from '../../database/Database';

export default class Profile extends Component {
  
  logoutUser = () => {
    Database.logout (() => {
      console.log ("Logged out");
    }, () => {
      console.log ("Failure to log out");
    });
  }

  render () {
    return (
      <View>
          <Text>Profile Component</Text>
          <TouchableOpacity onPress = { this.logoutUser } style = { styles.buttonContainer }>
              <Text style = { styles.buttonText }>Logout</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
      padding : 20
  },
  input : {
      height : 40,
      backgroundColor : 'rgba(255, 255, 255, 0.2)',
      marginBottom : 10,
      color : '#FFF',
      paddingHorizontal : 10
  },
  buttonContainer : {
      backgroundColor : '#2980b9',
      paddingVertical : 15
  },
  buttonText : {
      textAlign : 'center',
      color : '#FFFFFF',
      fontWeight : '700'
  }
})

AppRegistry.registerComponent ('Profile', () => Profile);