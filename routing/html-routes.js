// dependencies
const path = require('path');
// routing
module.exports = (app) => {
  // creating routes
  // GET /notes should return the notes.html file.
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
};