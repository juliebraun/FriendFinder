var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var Survey = function(body)
{
  this.customerName = body.customerName;
  this.phoneNumber = body.phoneNumber;
  this.customerEmail = body.customerEmail;
  this.customerID = body.customerID;
    this.yourName = body.yourName;
    this.yourPhoto = body.yourPhoto;
    this.Q1 = body.Q1;
    this.Q2 = body.Q2;
    this.Q3 = body.Q3;
    this.Q4 = body.Q4;
    this.Q5 = body.Q5;
    this.Q6 = body.Q6;
    this.Q7 = body.Q7;
    this.Q8 = body.Q8;
    this.Q9 = body.Q9;
    this.Q10 = body.Q10;
}

// var waitlist = [];
var HoplessRom = [];
//var tables = [];


// app.get("/", function(req, res)
// {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// // app.get("/html/:site", function(req, res)
// // {
// //   var site = req.params.site;

// //   res.sendFile(path.join(__dirname, "html/" + site));
// // });

// app.get("/api/public", function(req, res)
// {
//   res.json(tables);
// });

// app.get("/api/waitlist", function(req, res)
// {
//   res.json(waitlist);
// });

// app.post("/api/tables", function(req, res)
// {
//   console.log(req.body);
//   if(tables.length < 6)
//   {
//     tables.push(new Reservation(req.body));
//   }
//   else {
//     waitlist.push(new Reservation(req.body));
//   }
//   res.end("Awe yeah");
// });

app.listen(port, function()
{
  console.log("Server running on port: " + port);
});
