 var surveyData= require('../data/friends.js');

 module.exports = function(app) {
 	app.get('/api/survey', function(req,res) {
 		res.json(surveyData);
 	})
 }