import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';

import { SearchBar } from 'react-native-elements';

import Coins from '../../api/Coins';

export default class CoinPrices extends Component {

    state = {
        coins : [],
    }

    componentDidMount () {
        Coins.getCoins (15, (data) => {
            this.setState (
                {
                    coins : data
                }
            );
        }, () => {
            console.log ("failed to get data");
        });

        /* Coins.getCoin ("bitcoin", (data) => {
            this.setState (
                {
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

                <SearchBar
                    onChangeText = { (text) => { console.log (text) } }
                    onClearText =  { () => { console.log ('text cleared') } }
                    placeholder='Type Here...' />


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