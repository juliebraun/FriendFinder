 // var surveyData= require('../data/friends.js');

 // module.exports = function(app) {
 // 	app.get('/api/survey', function(req,res) {
 // 		res.json(surveyData);
 // 	})
 // }

 var friendsArray =require("../data/friends.js");

 module.exports = function(app) {

 	app.get("/api/survey", function(req,res) {
 		res.json(friendsArray)
 	});

 	app.post("/api/survey", function(req,res) {

 		var bestMatch = {
 			name: "",
 			photo: "",
 			friendDifference: 1000
 		};

 		console.log(req.body);

 		var userData =req.body;
 		var userScores = userData.scores;

 		console.log(userScores);

 		var totalDifference = 0;

 		for (var i =0; i<friendsArray.length; i++) {
 			console.log(friendsArray[i]);
 			totalDifference = 0;
 		
 			for (var j = 0; j<friendsArray[i].scores[j]; j++) {
 	 			totalDifference +=Math.abs(parseInt(userScores[j]) - parseInt(friendsArray[i].scores[j]));

 	 			if (totalDifference <=bestMatch.friendDifference) {

 	 				bestMatch.name = friendsArray[i].name;
 	 				bestMatch.photo = friendsArray[i].photo;
 	 				bestMatch.friendDifference = totalDifference;
 	 			}

 			}
 		}

 		friendsArray.push(userData);

 		res.json(bestMatch);
 	});
 }