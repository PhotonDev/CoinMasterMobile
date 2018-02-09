import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

import Database from '../../database/Database';

export default class KeysForm extends Component {

    constructor () {
        super();
        this.state = {
            key : '',
            secret : ''
        };
    }
   
    submitKey = () => {
        const { key, secret } = this.state;
        console.log (key);
        console.log (secret);
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