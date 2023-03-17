const config = (() => {
    return {
        NODE_ENV: 'production',
        VUE_APP_API_TIMEOUT: '180000',
        VUE_APP_API_LESBOOK: 'http://127.0.0.1:7260/client'
    }
})();

module.exports = config;
