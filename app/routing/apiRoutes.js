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