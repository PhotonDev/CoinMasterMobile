import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

import Coins from '../../api/Coins';

export default class CoinPrices extends Component {

    state = {
        coins : {},
    }

    componentDidMount () {
        Coins.getCoin ("bitcoin", (data) => {
            this.setState (
                {
                    coins : data[0]
                }
            );
            // console.log (data[0]);
        }, () => {
            console.log ("failed to get data");
        });
    }

    render () {
        return (
            <View style = { styles.container }>

                <StatusBar 
                    barStyle = 'light-content'
                />

                <Text>
                    { JSON.stringify(this.state.coins, null, 4) }
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container : {
        padding : 20
    },
})

AppRegistry.registerComponent ('CoinPrices', () => CoinPrices);