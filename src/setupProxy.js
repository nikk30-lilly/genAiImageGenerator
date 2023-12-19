const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://ie8mzx8j6h.execute-api.ap-northeast-1.amazonaws.com/',
    changeOrigin: true,
};
module.exports = function (app) {
    app.use('/test', createProxyMiddleware(proxy));
};
