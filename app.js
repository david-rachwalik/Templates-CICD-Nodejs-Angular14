// Azure automatically determines app is Node.js with presence of server.js or app.js at root

// const nodeJsServer = require('./server');

// module.exports = nodeJsServer;

const express = require('express');

/*
 * -------- Application Server Configurations --------
 */

// Initialize Express app server
const app = express();

// --- Configure middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = app;
