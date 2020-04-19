const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crik-archive", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  // res.sendFile(__dirname + "/index.html");
  res.render("home");
});

var list_t1 = [];
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

app.post("/", function (req, res) {
  var team1 = req.body.T1;
  var team2 = req.body.T2;
  var date = req.body.dt;
  // console.log(date);

  Match.find(function (err, mat1) {
    if (err) {
      console.log("Match Not Found In The Database");
    } else {
      var mat = mat1[0]["matches"];
      // console.log(mat1[0]["matches"], "mat1");
      mat.forEach(function (prop) {
        if (((prop.t1 == team1 && prop.t2 == team2 ) || (prop.t1 == team2 && prop.t2 == team1 ))&& prop.date == date) {
          // console.log(team1, team2, prop.result);
          finalVerdict = prop.result;

          Team.find(function (err1, country) {
            if (err1) {
              console.log("Error in team level 1");
            } else {
              country.forEach(function (players) {
                var player_array = players["players"];

                //To print team1

                player_array.forEach((individual) => {
                  if (individual["tname"] == team1) list_t1.push(individual);
                });

                //To print team2
                player_array.forEach((individual) => {
                  if (individual["tname"] == team2) list_t2.push(individual);
                  // console.log(individual["name"]);
                });
                if (list_t1.length != 0 && list_t2.length != 0)
                  // console.log(list_t1,list_t2);
                  res.render("result", {
                    list_t1: list_t1,
                    list_t2: list_t2,
                    result: finalVerdict,
                  });
              });
            }
          });
        }
      });
    }
    // res.send();
  });
});

app.listen(3000);
