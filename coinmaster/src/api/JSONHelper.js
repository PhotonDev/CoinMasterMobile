import React from 'react';
import { Alert } from 'react-native';

export default class JSONHelper {

    static async getJSON (url, successCallback, failureCallback) {
        fetch (url)
        .then(response => response.json())
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