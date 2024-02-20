const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
  // serving the webpacked html file in the dist folder and not the one in the client folder
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
