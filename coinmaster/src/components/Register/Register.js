import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import DismissKeyboard from 'dismissKeyboard';

import RegisterForm from './RegisterForm';

export default class Register extends Component {

    render () {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior = 'padding' style = { styles.container }>

                <TouchableWithoutFeedback onPress = { () => { DismissKeyboard() } }>
                    <View style = { styles.logoContainer }>
                        <Image 
                          style = { styles.logo }
                          source = { require ('../../../assets/images/logo/app-store.png') } />
                          <Text style = { styles.title }>An app made for easy management of your cryptocurrency</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress = { () => { DismissKeyboard() } }>
                    <View style = { styles.formContainer }>
                        <RegisterForm />
                        <TouchableOpacity onPress = { () => {
                            navigate("Login");
                        }} >
                            <Text style = { styles.loginText }>Already registered?</Text>
                        </TouchableOpacity>
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
    loginText : {
        color : '#FFFFFF',
        fontWeight : '100'
    }
});

AppRegistry.registerComponent ('Register', () => Register);