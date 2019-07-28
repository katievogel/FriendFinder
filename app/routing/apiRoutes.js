var usersArray = require("../data/friends");
var newFriend = require("../data/new-friend")

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(usersArray);
    
    });

    app.get("/api/new-friend", function(req, res) {
      res.json(newFriend);
    });
   
    app.post("/api/friends", function(req, res) {
      console.log(req.url);
      console.log(req.body);
      res.json(true);
      for (var i = 0; i < usersArray.length; i++) {
        if (newFriend[0] !== usersArray[i]) {
          usersArray.push(req.body);
        }
        else {
          console.log("Already entered a profile");
        }
      }});
  //   var newUser=req.body.scores;
  //   for(var i = 0; i < newFriend.scores.length; i++) {
  //     usersArray.scores[i] = parseInt(usersArray.scores[i]);
  //   }
  //   var gamerMatch = 0;
  //   var minDiff = 40;
  //   for(var i = 0; i < usersArray.length; i++) {
  //     var totalDiff = 0;
  //     for(var j = 0; j < usersArray[i].scores.length; j++) {
  //       var scoreDiff = Math.abs(newFriend.scores[j] - usersArray[i].scores[j]);
  //       totalDiff += scoreDiff;
  //     }
  //     if(totalDiff < minDiff) {
  //       gamerMatch = i;
  //       minDiff = totalDiff;
  //     }
  //   }
  //   usersArray.push(newFriend);
  //   res.json(usersArray[gamerMatch]);
  };
