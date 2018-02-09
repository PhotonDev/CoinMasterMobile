import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

import * as Keychain from 'react-native-keychain';

import Keys from '../../api/Keys';


export default class APIKeysForm extends Component {

    constructor () {
        super();
        this.state = {
            key : '',
            secret : ''
        };
    }

    /*
    componentWillMount () {
        Keychain.getInternetCredentials (server)
            .then(()  => {
                if (credentials) {
                    this.setState ({
                        key : credentials.username,
                        secret : credentials.password
                    })
                }
            })
    } */
   
    submitKey = () => {
        const { key, secret } = this.state;
        console.log (key);
        console.log (secret);

        // Expo.SecureStore.setItemAsync(key, value, options)
        Keys.setAPICredentials (key, secret, () => {
            console.log ("success to set Item");
        }, () => {
            console.log ("failed to set api key");
        });
        
        Keys.getAPICredentials (key, (data) => {
            this.setState ({
                    secret : data
                }
            );
        }, () => {
            console.log ("failed to get api secret");
        });

    }

    render () {
        return (
            <View style = { styles.container }>

                <StatusBar 
                    barStyle = 'light-content'
                />

                    <TextInput
                        placeholder = 'Key'
                        placeholderTextColor = 'rgba(255, 255, 255, 0.7)'
                        returnKeyType = 'next'
                        value = { this.state.key }
                        onChangeText = { key => this.setState ( { key } ) }
                        onSubmitEditing = { () => this.secretInput.focus () }
                        keyboardType = 'default'
                        autoCapitalize = 'none'
                        autoCorrect = { false }
                        style = { styles.input } />
                        
                    <TextInput
                        placeholder = 'secret'
                        placeholderTextColor = 'rgba(255, 255, 255, 0.7)'
                        returnKeyType = 'go'
                        value = { this.state.secret }
                        onChangeText = { secret => this.setState ( { secret } ) }
                        onSubmitEditing = { this.submitKey }
                        style = { styles.input } 
                        ref = { (input) => this.secretInput = input }
                        secureTextEntry />

                    <TouchableOpacity onPress = { this.submitKey } style = { styles.buttonContainer }>
                        <Text style = { styles.buttonText }>Use Key</Text>
                    </TouchableOpacity>

                    <Text>
                        { this.state.key }
                        { this.state.secret }
                    </Text>

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
    },
})

AppRegistry.registerComponent ('KeysForm', () => KeysForm);