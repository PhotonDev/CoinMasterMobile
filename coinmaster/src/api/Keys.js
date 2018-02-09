import React from 'react';
import { Alert } from 'react-native';

import JSONHelper from './JSONHelper';

export default class Keys {

    static server = "http://kraken.com";

    static async setAPICredentials (key, secret, successCallback, failureCallback) {
        await Expo.SecureStore.setItemAsync(key, secret, null)
        .then (successCallback)
        .catch (error => {
            console.log (error);
            failureCallback ();
            throw error;
        })
    }

    static async getAPICredentials (key, successCallback, failureCallback) {
        await Expo.SecureStore.getItemAsync(key, null)
        .then (response => {
            console.log (response);
            successCallback (response);
        }).catch (error => {
            console.log (error);
            failureCallback ();
            throw error;
        })
    }

}