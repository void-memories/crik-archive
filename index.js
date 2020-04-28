const mongoose = require("mongoose");
mongoose.connect(
  // "mongodb://localhost:27017/crik-archive",
  "mongodb+srv://admin-naman:namanrocks@cluster0-wjfnd.mongodb.net/crik-archive",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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
  var flag = 0;
  // console.log(date);

  Match.find(function (err, mat1) {
    var flag = 0;
    var mat = mat1[0]["matches"];
    var n = mat.length;

    for (var i = 0; i < n; i++) {
      if (
        ((mat[i].t1 == team1 && mat[i].t2 == team2) ||
          (mat[i].t1 == team2 && mat[i].t2 == team1)) &&
        mat[i].date == date
      ) {
        finalVerdict=mat[i].result;
        flag = 1;
        break;
      }
    }

    if (flag == 1) {
      Team.find(function (err, country) {
        var n = country.length;
        console.log(n);
        for (var i = 0; i < n; i++) {
          if (country[i]["players"][0]["tname"] == team1) {
            for (var j = 0; j < 11; j++) list_t1.push(country[i]["players"][j]);
          }

          if (country[i]["players"][0]["tname"] == team2) {
            for (var j = 0; j < 11; j++) list_t2.push(country[i]["players"][j]);
          }
        }
        if (list_t1.length != 0 && list_t2.length != 0) {
          console.log(finalVerdict);
          res.render("result", {
            result: finalVerdict,
            list_t1: list_t1,
            list_t2: list_t2,
          });
        }
      });
    } else {
      console.log("no");
      res.render("404");
    }
  });
});

// app.get("/search", function (req, res) {
//   res.send("shit's working!!!");
// });

app.post("/search", function (req, res) {
  list_t12 = [];
  var flag2 = 0;
  var pName = req.body.searchPlayer.toUpperCase();

  Team.find(function (err, country) {
    var n = country.length;
    console.log(n);
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < 11; j++) {
        if (country[i]["players"][j]["name"].toUpperCase() == pName) {
          list_t12.push(country[i]["players"][j]);
          flag2 = 1;
          break;
        }
        if (flag2 == 1) break;
      }
    }
    if (flag2 == 1) {
      res.render("result2", {
        player: list_t12[0],
      });
    } else {
      console.log("no");
      res.render("404");
    }
  });
});

app.post("/bats", function (req, res) {
  var playersList = [];

  Team.find(function (err, country) {
    var n = country.length;
    console.log(n);
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < 11; j++) {
        playersList.push(country[i]["players"][j]);
      }
    }
    playersList.sort((a, b) => parseFloat(b.runs) - parseFloat(a.runs));

    res.render("bats", {
      playersList: playersList,
    });
  });
});

app.post("/ball", function (req, res) {
  var playersList = [];

  Team.find(function (err, country) {
    var n = country.length;
    console.log(n);
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < 11; j++) {
        playersList.push(country[i]["players"][j]);
      }
    }
    playersList.sort((a, b) => parseFloat(b.wickets) - parseFloat(a.wickets));

    res.render("bats", {
      playersList: playersList,
    });
  });
});

app.get("/add", function (req, res) {
  res.render("add");
});

app.post("/add", function (req, res) {
  var team1 = req.body.T1;
  var team2 = req.body.T2;
  var date = req.body.dt;
  var rst = req.body.rst;

  var topush = { t1: team1, t2: team2, date: date, result: rst };
  var final = [];

  var flag = 0;
  var mat = [];
  // Match.findByIdAndDelete("5e9c8e9883a4bb14b2c9fc8e");
  


  Match.find(function (err, mat1) {
    mat = mat1[0]["matches"];

    final = mat;
    final.push(topush);
    flag = 1;
    console.log("flag has been made 1");
    Match.collection.drop();
    

    const n = new Match({
      matches: final,
    });
    n.save();
    // log.console("new databsae has been saved");
    res.render("success");

    // Match.deleteOne({_id : "5e9c8e9883a4bb14b2c9fc8e"});

    // const n=new Match({
    //   matches:final
    // })
    // n.save();
  });
  // while (1) {
  //   if (flag) {
  //     break;
  //   }
  // }

  // Match.updateOne({_id : ObjectId("5e9c8e9883a4bb14b2c9fc8e")});
});

app.listen(process.env.PORT || 3000);
