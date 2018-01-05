import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View, Image, StyleSheet } from 'react-native';

import Profile from '../../components/Profile/Profile'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

const TabNavigation = TabNavigator ({
  Profile : {
    screen : Login,
    navigationOptions : {
      tabBarLabel : 'Profile',
      tabBarIcon  : ({ tintColor }) => (
        <Image 
          source = { require ('../../../assets/profile.imageset/user_male.png') }
          style  = { [styles.icon, { tintColor : tintColor }]}
        />
      )
    },
  },
  Register : {
    screen : Register,
    navigationOptions : {
      tabBarLabel : 'Register',
      tabBarIcon  : (
        { 
          tintColor 
        }
        ) => (
        <Image 
          source = { require ('../../../assets/address-book.imageset/address_book.png') }
          style  = { [styles.icon, { tintColor : tintColor }]}
        />
      )
    },
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default TabNavigation;