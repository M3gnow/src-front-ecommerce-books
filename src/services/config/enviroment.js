const config = (() => {
    return {
        NODE_ENV: 'production',
        VUE_APP_API_TIMEOUT: '180000',
        VUE_APP_API_LESBOOK: 'http://127.0.0.1:7260/api',
        VUE_APP_API_LESBOOK_CLIENT: 'http://127.0.0.1:7260/api/client',
        VUE_APP_API_LESBOOK_CLIENT_MOCK: 'https://run.mocky.io/v3/148a713d-d591-4850-8b3a-74d1d2b695ec',
        MOCK_APP_API_LESKBOOK_CARD_FLAG: 'https://run.mocky.io/v3/41e926c3-4283-4a79-862d-1e5239402c61',
        MOCK_APP_API_LESKBOOK_ADDRESS: 'https://run.mocky.io/v3/3697f2dd-120d-4be4-bec2-535b4045980c',
        MOCK_APP_API_LESKBOOK_CARDS: 'https://run.mocky.io/v3/edc9eb7c-b217-49b8-9c13-c6dc7e5802f5',
        MOCK_APP_API_LESKBOOK_CARD_BY_ID: 'https://run.mocky.io/v3/c57d6fa8-0826-4d17-9997-c92a2ce0890c',
        MOCK_APP_API_LESKBOOK_HOME_BY_ID: 'https://run.mocky.io/v3/0258bbf7-9652-4bfe-a14c-7002269c1b2c',
        MOCK_APP_API_LESKBOOK_DELIVERY_BY_ID: 'https://run.mocky.io/v3/50f8f3ff-b348-4bd4-a01a-c1ed2061b8bb',
        MOCK_APP_API_LESKBOOK_BILLING_BY_ID: 'https://run.mocky.io/v3/170dace0-8ce6-40c5-8537-20849f1f3060',
    }
})();

module.exports = config;
