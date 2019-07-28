var userData = require("../data/friends");
var newUserData = require("../data/new-friend")

function empty() {
  newFriend.length = 0;
}
module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(userData);
    });

    app.get("/api/new-friend", function(req, res) {
      res.json(newUserData);
    });
   
    app.post("/api/friends", function(req, res) {
      for (var i = 0; i < usersArray.length; i++) {
        if (newFriend[0] !== usersArray[i]) {
          userData.push(req.body);
          res.json(true);
          empty();
        }
        else {
          console.log("Already entered a profile");
          res.json(false);
          empty();
        }
      }});
    var newUser=req.body.scores;
    for(var i = 0; i < newUserData.scores.length; i++) {
      userData.scores[i] = parseInt(userData.scores[i]);
    }
    var gamerMatch = 0;
    var minDiff = 40;
    for(var i = 0; i < userData.length; i++) {
      var totalDiff = 0;
      for(var j = 0; j < userData[i].scores.length; j++) {
        var scoreDiff = Math.abs(newUserData.scores[j] - userData[i].scores[j]);
        totalDiff += scoreDiff;
      }
      if(totalDiff < minDiff) {
        gamerMatch = i;
        minDiff = totalDiff;
      }
    }
    userData.push(newUserData);
    res.json(userData[gamerMatch]);
  };