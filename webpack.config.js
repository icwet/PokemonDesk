const clientConfig = require('./webpack.client.config');
const serverConfig = require('./webpack.server.config');

exports.default = [clientConfig, serverConfig];
