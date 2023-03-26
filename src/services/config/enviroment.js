const config = (() => {
    return {
        NODE_ENV: 'production',
        VUE_APP_API_TIMEOUT: '180000',
        VUE_APP_API_LESBOOK: 'https://localhost:7260',
        VUE_APP_API_LESBOOK_CLIENT: 'https://localhost:7260/api/client',        
        MOCK_APP_API_LESKBOOK_CARD_FLAG: 'https://localhost:7260/card/flags',
        MOCK_APP_API_LESKBOOK_ADDRESS: 'https://localhost:7260/api/adress/all/11',
        MOCK_APP_API_LESKBOOK_CARDS: 'https://localhost:7260/api/card/all/11',
        MOCK_APP_API_LESKBOOK_CARD_BY_ID: 'https://localhost:7260/api/card/13',
        
        // MOCK
        VUE_APP_API_LESBOOK_CLIENT_MOCK: 'https://run.mocky.io/v3/148a713d-d591-4850-8b3a-74d1d2b695ec',
        MOCK_APP_API_LESKBOOK_HOME_BY_ID: 'https://run.mocky.io/v3/0258bbf7-9652-4bfe-a14c-7002269c1b2c',
        MOCK_APP_API_LESKBOOK_DELIVERY_BY_ID: 'https://run.mocky.io/v3/50f8f3ff-b348-4bd4-a01a-c1ed2061b8bb',
        MOCK_APP_API_LESKBOOK_BILLING_BY_ID: 'https://run.mocky.io/v3/170dace0-8ce6-40c5-8537-20849f1f3060',
    }
})();

module.exports = config;
