const express = require("express");
const fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routing/html-routes')(app);
require('./routing/api-routes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});