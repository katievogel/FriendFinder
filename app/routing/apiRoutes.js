var usersArray = require("../data/friends");
//var newFriend = require("../data/new-friend")

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(usersArray);
  });
  app.post("/api/friends", function (req, res) {
    console.log(req.url);
    console.log(req.body);
    // for (var i = 0; i < usersArray.length; i++) {
    //   if (newFriend[0] !== usersArray[i]) {
    //     usersArray.push(req.body);
    //   }
    //   else {
    //     console.log("Already entered a profile");
    //   }
    // }
    var totalScoreDiff = 0;
    var gamerMatch = {
      name: "",
      photo: "",
      minDiff: 50
    };

    var newFriend = req.body;
    var newFriendName = newFriend.name;
    var newFriendScores = newFriend.scores;

    var parsedScores = newFriendScores.map(function (item) {
      return parseInt(item, 10);
    });

    newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: parsedScores
    };
    console.log("Name: " + newFriendName);
    console.log("New Friend Score: " + newFriendScores);

    var newFriendScoreSum = parsedScores.reduce((a, b) => a + b, 0);
    console.log("Sum of Scores: " + newFriendScoreSum);

    for (var i = 0; i < usersArray.length; i++) {
      var gamerBudScore = usersArray[i].scores.reduce((a, b) => a + b, 0);
      totalScoreDiff += Math.abs(newFriendScoreSum - gamerBudScore);
      console.log("Difference of scores: " + totalScoreDiff);

      if (totalScoreDiff <= gamerMatch.minDiff) {
        gamerMatch.name = usersArray[i].name;
        gamerMatch.photo = usersArray[i].photo;
        gamerMatch.minDiff = totalScoreDiff;
      }
    }
    console.log(gamerMatch);
    usersArray.push(newFriend);
    res.send(gamerMatch);
  }) 
};
