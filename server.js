var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// var Survey = function(body)
// {
//   this.customerName = body.customerName;
//   this.phoneNumber = body.phoneNumber;
//   this.customerEmail = body.customerEmail;
//   this.customerID = body.customerID;
//     this.yourName = body.yourName;
//     this.yourPhoto = body.yourPhoto;
//     this.Q1 = body.Q1;
//     this.Q2 = body.Q2;
//     this.Q3 = body.Q3;
//     this.Q4 = body.Q4;
//     this.Q5 = body.Q5;
//     this.Q6 = body.Q6;
//     this.Q7 = body.Q7;
//     this.Q8 = body.Q8;
//     this.Q9 = body.Q9;
//     this.Q10 = body.Q10;
// }

// // var waitlist = [];
// var HoplessRom = [];
//var tables = [];


app.listen(PORT, function()
{
  console.log("Server running on port: " + PORT);
});
