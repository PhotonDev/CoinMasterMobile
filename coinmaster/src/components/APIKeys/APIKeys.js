import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import DismissKeyboard from 'dismissKeyboard';

import APIKeysForm from './APIKeysForm';

export default class APIKeys extends Component {

    render () {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior = 'padding' style = { styles.container }>

                <TouchableWithoutFeedback onPress = { () => { DismissKeyboard() } }>
                    <View style = { styles.logoContainer }>
                        <Text style = { styles.title }>
                            INSERT API KEY AND SECRET FOR KRAKEN WE DO NOT STORE THE SECRET ON THE SERVER
                            WE STORE IT LOCALLY ON YOUR DEVICE AND USE IT SIMPLY TO REQUEST DATA FROM THE SERVER
                            USING HTTPS, WE ONLY STORE THE API KEY WHICH IS USELESS WITHOUT THE SECRET, DO NOT SHARE
                            YOUR API SECRET WITH ANYBODY!
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress = { () => { DismissKeyboard() } }>
                    <View style = { styles.formContainer }>
                        <APIKeysForm />
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        backgroundColor : '#3498db'
    },
    logoContainer : {
        alignItems : 'center',
        flexGrow : 1,
        justifyContent : 'center'
    },
      logo : {
          width : 100,
          height : 100
    },
    title : {
      color : '#FFF',
      marginTop : 10,
      width : 160,
      textAlign : 'center',
      opacity : 0.9
    },
    registerText : {
        color : '#FFFFFF',
        fontWeight : '100'
    }
});

AppRegistry.registerComponent ('APIKeys', () => APIKeys);