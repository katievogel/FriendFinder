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
          friends.push(req.body);
          res.json(true);
          empty();
        }
        else {
          console.log("Already entered a profile");
          res.json(false);
          empty();
        }
      }});
    };

    var newUser = req.body;
    for(var i = 0; i < newUser.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }
    var gamerMatch = 0;
    var minDiff = 40;
    for(var i = 0; i < friends.length; i++) {
      var totalDiff = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var scoreDiff = Math.abs(newUser.scores[j] - friends[i].scores[j]);
        totalDiff += scoreDiff;
      }
      if(totalDiff < minDiff) {
        bestFriendIndex = i;
        minDiff = totalDiff;
      }
    }
    friends.push(newUser);
    res.json(friends[gamerMatch]);