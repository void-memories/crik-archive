const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin-naman:namanrocks@cluster0-wjfnd.mongodb.net/crik-archive", 
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(middleware.requireAuthentication());

app.get("/", function (req, res) {
  res.render("home");
});

var list_t1 = [];
var list_t12 = [];
var list_t2 = [];
var finalVerdict = "";

const teamSchema = new mongoose.Schema({
  players: [
    {
      name: String,
      tname: String,
      runs: Number,
      centuries: Number,
      halfCenturies: Number,
      average: Number,
      wickets: Number,
      basePrice: Number,
      soldPrice: Number,
    },
  ],
});
const Team = mongoose.model("Team", teamSchema);

const matchSchema = new mongoose.Schema({
  matches: [
    {
      t1: String,
      t2: String,
      date: String,
      result: String,
    },
  ],
});
const Match = mongoose.model("Match", matchSchema);

// app.post("/verdict", function (req, res) {
//   console.log('hell');
// });

app.post("/verdict", function (req, res) {
  list_t1 = [];
  list_t2 = [];
  var team1 = req.body.T1;
  var team2 = req.body.T2;
  var date = req.body.dt;
  var flag=0;
  // console.log(date);

  Match.find(function (err, mat1) {
    if (err) {
      console.log("Match Not Found In The Database");
    } else {
      var mat = mat1[0]["matches"];
      // console.log(mat1[0]["matches"], "mat1");
      mat.forEach(function (prop) {
        if (
          ((prop.t1 == team1 && prop.t2 == team2) ||
            (prop.t1 == team2 && prop.t2 == team1)) &&
          prop.date == date
        ) {
          // console.log(team1, team2, prop.result);
          finalVerdict = prop.result;

          Team.find(function (err1, country) {
            if (err1) {
              console.log("Error in team level 1");
            } else {
              country.forEach(function (players) {
                if(flag==0){
                
                var player_array = players["players"];

                //To print team1

                player_array.forEach(function (individual) {
                  if (individual["tname"] == team1) list_t1.push(individual);
                });

                //To print team2
                player_array.forEach(function (individual) {
                  if (individual["tname"] == team2) list_t2.push(individual);
                  // console.log(individual["name"]);
                });

                // console.log(list_t1, list_t2);
                if (list_t1.length != 0 && list_t2.length != 0) {
                  res.render("result", {
                    result: finalVerdict,
                    list_t1: list_t1,
                    list_t2: list_t2,
                  });
                  // return next2();
                  flag=1;
                }
              }});
            }
          });
        }
      });
    }
  });
  console.log(flag,"final flag");
});

// app.get("/search", function (req, res) {
//   res.send("shit's working!!!");
// });

app.post("/search", function (req, res) {
  list_t12 = [];
  var pName = req.body.searchPlayer.toUpperCase();
  console.log(pName, "xxx");

  Team.find(function (err12, country1) {
    if (err12) {
      console.log("Error in team level 1");
    } else {
      country1.forEach(function (players12) {
        var player_array12 = players12["players"];

        //To print team1

        player_array12.forEach((individual12) => {
          if (individual12["name"].toUpperCase() == pName)
            list_t12.push(individual12);
        });
        if (list_t12.length > 0) {
          res.render("result2", {
            player: list_t12[0],
          });
          // res.end();
        }
      });
    }
  });
});

app.listen(process.env.PORT || 3000);
