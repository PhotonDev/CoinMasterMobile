import React from 'react';
import { Alert } from 'react-native';

import JSONHelper from './JSONHelper';

export default class Coins {

    static CURRENCY = "USD";

    static SINGLE_COIN_URL = "https://api.coinmarketcap.com/v1/ticker/$COIN/?convert=$CURRENCY";
    static MULTIPLE_COINS_URL = "https://api.coinmarketcap.com/v1/ticker/?convert=$CURRENCY&limit=$LIMIT";

    /*
        [
            {
                "id": "bitcoin",
                "name": "Bitcoin",
                "symbol": "BTC",
                "rank": "1",
                "price_usd": "573.137",
                "price_btc": "1.0",
                "24h_volume_usd": "72855700.0",
                "market_cap_usd": "9080883500.0",
                "available_supply": "15844176.0",
                "total_supply": "15844176.0",
                "max_supply": "21000000.0",
                "percent_change_1h": "0.04",
                "percent_change_24h": "-0.3",
                "percent_change_7d": "-0.57",
                "last_updated": "1472762067"
            }
        ]    

        {
            "error": "id not found"
        }                               
    */
    static async getCoin (coin, successCallback, failureCallback) {
        await JSONHelper.getJSON (Coins.generateSingleCoinURL (coin), successCallback, failureCallback);
    }

    static async getCoins (limit, successCallback, failureCallback) {
        await JSONHelper.getJSON (Coins.generateMultipleCoinsURL (limit), successCallback, failureCallback);
    }

    static generateSingleCoinURL (coin) {
        return (Coins.SINGLE_COIN_URL.replace ("$COIN", coin)).replace ("$CURRENCY", Coins.CURRENCY);
    }

    static generateMultipleCoinsURL (limit) {
        return (Coins.MULTIPLE_COINS_URL.replace ("$LIMIT", limit)).replace ("$CURRENCY", Coins.CURRENCY);
    }

}