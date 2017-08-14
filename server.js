var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

// var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({type: 'applicaton/*+json'}))
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({type: 'text/html'}))

app.listen(PORT, function() {
  console.log("Server running on port: " + PORT);
});


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

