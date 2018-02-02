import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';

import Coins from '../../api/Coins';

export default class CoinPrices extends Component {

    state = {
        coins : [],
    }

    componentDidMount () {
        Coins.getCoins (15, (data) => {
            console.log ("SUCCESS");
            this.setState (
                {
                    // coins : data[0]
                    coins : data
                }
            );
            // console.log (data[0]);
        }, () => {
            console.log ("failed to get data");
        });

        /* Coins.getCoin ("bitcoin", (data) => {
            this.setState (
                {
                    // coins : data[0]
                    coins : data
                }
            );
            // console.log (data[0]);
        }, () => {
            console.log ("failed to get data");
        }); */
    }

    render () {
        return (
            <ScrollView style = { styles.container }>

                <StatusBar 
                    barStyle = 'light-content'
                />
                
                { this.state.coins.map ((obj, index) => (
                    <Text key = { index }>
                        { JSON.stringify(obj, null, 4) }
                    </Text>
                ))}

            {/*
                <Text>
                    { JSON.stringify(this.state.coins, null, 4) }
                </Text>
            */ }

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    container : {
        padding : 20
    },
})

AppRegistry.registerComponent ('CoinPrices', () => CoinPrices);