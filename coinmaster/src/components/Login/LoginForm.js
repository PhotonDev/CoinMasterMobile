import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

import Database from '../../database/Database';

export default class LoginForm extends Component {

    constructor () {
        super();
        this.state = {
            username : '',
            password : ''
        };
    }
   
    loginUser = () => {
        const { username, password } = this.state;
        console.log (username);
        console.log (password);
        Database.login (username, password);
    }

    render () {
        return (
            <View style = { styles.container }>

                <StatusBar 
                    barStyle = 'light-content'
                />

                    <TextInput
                        placeholder = 'username or email'
                        placeholderTextColor = 'rgba(255, 255, 255, 0.7)'
                        returnKeyType = 'next'
                        value = { this.state.username }
                        onChangeText = { username => this.setState ( { username } ) }
                        onSubmitEditing = { () => this.passwordInput.focus () }
                        keyboardType = 'email-address'
                        autoCapitalize = 'none'
                        autoCorrect = { false }
                        style = { styles.input } />
                        
                    <TextInput
                        placeholder = 'password'
                        placeholderTextColor = 'rgba(255, 255, 255, 0.7)'
                        returnKeyType = 'go'
                        value = { this.state.password }
                        onChangeText = { password => this.setState ( { password } ) }
                        onSubmitEditing = { this.loginUser }
                        style = { styles.input } 
                        ref = { (input) => this.passwordInput = input }
                        secureTextEntry />

                    <TouchableOpacity onPress = { this.loginUser } style = { styles.buttonContainer }>
                        <Text style = { styles.buttonText }>Login</Text>
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

AppRegistry.registerComponent ('LoginForm', () => LoginForm);