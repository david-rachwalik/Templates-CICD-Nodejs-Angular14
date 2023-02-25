// Azure automatically determines app is Node.js with presence of index.js, server.js, or app.js at root
const nodeJsServer = require('./server');

module.exports = nodeJsServer;
