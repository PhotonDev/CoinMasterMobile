import React from 'react';
import { Alert } from 'react-native';

import JSONHelper from './JSONHelper';

export default class KeysAPI {

    static async setItem (key, secret) {
        await Expo.SecureStore.setItemAsync(key, secret, null);
    }

    static async getItem (key) {
        await Expo.SecureStore.getItemAsync(key, null).then (response => {
            console.log (response);
            console.log ("SUCCESS");
        }).catch (error => {
            console.log (error);
            console.log ("FAILURE");
            throw error;
        });

    }

}