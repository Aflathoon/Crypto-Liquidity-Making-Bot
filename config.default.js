let config = {
    exchanges: [{
        name: "coinfalcon",
        url: "https://coinfalcon.com",
        active: true,
        debug: true,
        CF_API_KEY: "",
        CD_API_SECRET_KEY: "",
        sleepPause: 225, // How much ms wait before continue new loop
        stickToBigOrders: false,
        // ignoreOrderSize: How big size of order is ignored
        // How big spread between ask/bid order and between first and second order
        pairs: [{name: "IOT-EUR", separator: "-", digitsPrice: 4, digitsSize: 5, buySize: 0, buyForAmount: 10, ignoreOrderSize: 1, pipsAskBidSpread: 10, percentageProfitTarget: 0.12, pipsBuySpread: 10}, {name: "BTC-EUR",separator: "-", digitsPrice: 2, digitsSize: 8, buySize: 0, buyForAmount: 20, ignoreOrderSize: 0.0, pipsAskBidSpread: 100, percentageProfitTarget: 0.12, pipsBuySpread: 100}],
        accounts: [{name:"eur"},{name:"btc"},{name:"iot"}]
    },{
        name: "coinmate",
        url: "https://coinmate.io",
        active: true,
        debug: true,
        privateKey: '',
        publicKey: '',
        clientId: '',
        sleepPause: 625, // How much ms wait per api call before continue new loop. Coinmate: 100 request per minute
        stickToBigOrders: false,
        accounts: [{name:"BTC"},{name:"CZK"}],
        pairs: [{name: "BTC_CZK", separator: "_", digitsPrice: 2, digitsSize: 4, buySize: 0, buyForAmount: 50, ignoreOrderSize: 0.0001, pipsAskBidSpread: 2500, percentageProfitTarget: 0.5, pipsBuySpread: 10000},{name: "BTC_EUR", separator: "_", digitsPrice: 2, digitsSize: 4, buySize: 0, buyForAmount: 5, ignoreOrderSize: 0.0001, pipsAskBidSpread: 100, percentageProfitTarget: 0.5, pipsBuySpread: 500}]
    }]
};
module.exports = config;
