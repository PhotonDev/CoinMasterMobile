import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const StackNavigation = StackNavigator(
    {
        Login : {
            screen : Login,
            navigationOptions : {
                header : null
            }
        },
        Register : {
            screen : Register,
            navigationOptions : {
                header : null
            }
        }
    },
    {
        initialRouteName : "Login"
    }
);

export default StackNavigation;