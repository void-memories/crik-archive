const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crik-archive", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
const india = new Team({
  players: [
    {
      name: "Sachin Tendulkar",
      tname: "India",
      runs: 83749,
      centuries: 100,
      halfCenturies: 231,
      average: 44,
      wickets: 11,
      basePrice: 83,
      soldPrice: 111,
    },
    {
      name: "Virat Kohli",
      tname: "India",
      runs: 837,
      centuries: 32,
      halfCenturies: 33,
      average: 94,
      wickets: 41,
      basePrice: 93,
      soldPrice: 311,
    },

    {
      name: "Virender  Sehwag ",
      tname: "India",
      runs: 394,
      centuries: 0,
      halfCenturies: 2,
      average: 21.88,
      wickets: 13,
      baseprice: 26,
      soldprice: 50,
    },

    {
      name: "Rohit sharma",
      tname: "India",
      runs: 2773,
      centuries: 4,
      halfCenturies: 21,
      average: 32.66,
      wickets: 17,
      basePrice: 45,
      soldPrice: 150,
    },

    {
      name: "MS Dhoni",
      tname: "India",
      runs: 1617,
      centuries: 1,
      halfCenturies: 2,
      average: 37.6,
      wickets: 20,
      basePrice: 78,
      soldPrice: 230,
    },
    {
      name: "Shikhar Dhawan",
      tname: "India",
      runs: 1588,
      centuries: 2,
      halfCenturies: 10,
      average: 28.35,
      wickets: 43,
      basePrice: 47,
      soldPrice: 124,
    },
    {
      name: "Lokesh Rahul",
      tname: "India",
      runs: 1461,
      centuries: 2,
      halfCenturies: 11,
      average: 45.65,
      wickets: 45,
      basePrice: 57,
      soldPrice: 188,
    },
    {
      name: "Yuvaraj singh",
      tname: "India",
      runs: 1177,
      centuries: 5,
      halfCenturies: 10,
      average: 28.02,
      wickets: 35,
      basePrice: 78,
      soldPrice: 234,
    },
    {
      name: "MK Pandey",
      tname: "India",
      runs: 707,
      centuries: 6,
      halfCenturies: 13,
      average: 47.13,
      wickets: 16,
      basePrice: 342,
      soldPrice: 2341,
    },
    {
      name: "Sachin Tendulkar",
      tname: "India",
      runs: 8374,
      centuries: 70,
      halfCenturies: 100,
      average: 46.5,
      wickets: 11,
      basePrice: 23,
      soldPrice: 125,
    },
    {
      name: "Rishabh Panth",
      tname: "India",
      runs: 1598,
      centuries: 2,
      halfCenturies: 5,
      average: 45.34,
      wickets: 10,
      basePrice: 67,
      soldPrice: 89,
    },
    {
      name: "Ravindra Jadeja",
      tname: "India",
      runs: 4338,
      centuries: 1,
      halfCenturies: 26,
      average: 42.45,
      wickets: 439,
      basePrice: 64,
      soldPrice: 586,
    },
  ],
});

const australia = new Team({
  players: [
    {
      name: "David warner",
      tname: "Australia",
      runs: 14718,
      centuries: 43,
      halfCenturies: 68,
      average: 68.88,
      wickets: 4,
      basePrice: 23,
      soldPrice: 145,
    },
    {
      name: "Glenn Maxwell",
      tname: "Australia",
      runs: 2700,
      centuries: 5,
      halfCenturies: 26,
      average: 33.33,
      wickets: 150,
      basePrice: 67,
      soldPrice: 234,
    },
    {
      name: "Steve smith",
      tname: "Australia",
      runs: 12070,
      centuries: 30,
      halfCenturies: 52,
      average: 50.55,
      wickets: 25,
      basePrice: 87,
      soldPrice: 160,
    },
    {
      name: "Jackson Bird",
      tname: "Australia",
      runs: 43,
      centuries: 2,
      halfCenturies: 5,
      average: 22.3,
      wickets: 38,
      basePrice: 120,
      soldPrice: 234,
    },
    {
      name: "Nathan Lyon",
      tname: "Australia",
      runs: 1082,
      centuries: 12,
      halfCenturies: 25,
      average: 36.55,
      wickets: 24,
      basePrice: 45,
      soldPrice: 340,
    },
    {
      name: "Adam Zamp",
      tname: "Australia",
      runs: 184,
      centuries: 6,
      halfCenturies: 13,
      average: 28.34,
      wickets: 18,
      basePrice: 231,
      soldPrice: 124,
    },
    {
      name: "Aaron Finch",
      tname: "Australia",
      runs: 5882,
      centuries: 16,
      halfCenturies: 40,
      average: 41.44,
      wickets: 19,
      basePrice: 34,
      soldPrice: 341,
    },
    {
      name: "Pat Cummins",
      tname: "Australia",
      runs: 1030,
      centuries: 0,
      halfCenturies: 2,
      average: 23.33,
      wickets: 6,
      basePrice: 86,
      soldPrice: 138,
    },
    {
      name: "Kane Richardson",
      tname: "Australia",
      runs: 84,
      centuries: 0,
      halfCenturies: 0,
      average: 12.33,
      wickets: 3,
      basePrice: 67,
      soldPrice: 238,
    },
    {
      name: "Mitchell Starc",
      tname: "Australia",
      runs: 1842,
      centuries: 2,
      halfCenturies: 10,
      average: 21.33,
      wickets: 12,
      basePrice: 28,
      soldPrice: 197,
    },
    {
      name: "Marcus Stoinis",
      tname: "Australia",
      runs: 1253,
      centuries: 3,
      halfCenturies: 6,
      average: 19.22,
      wickets: 35,
      basePrice: 40,
      soldPrice: 150,
    },
  ],
});

const england = new Team({
  players: [
    {
      name: "Ben Stokes",
      tname: "England",
      runs: 6002,
      centuries: 8,
      halfCenturies: 22,
      average: 38.44,
      wickets: 23,
      basePrice: 34,
      soldPrice: 99,
    },
    {
      name: "Joe root",
      tname: "England",
      runs: 12093,
      centuries: 25,
      halfCenturies: 42,
      average: 34.45,
      wickets: 32,
      basePrice: 123,
      soldPrice: 234,
    },
    {
      name: "Eoin Morgan",
      tname: "England",
      runs: 8133,
      centuries: 21,
      halfCenturies: 34,
      average: 35.55,
      wickets: 24,
      basePrice: 56,
      soldPrice: 230,
    },
    {
      name: "Jos Buttler",
      tname: "England",
      runs: 6843,
      centuries: 19,
      halfCenturies: 26,
      average: 23.67,
      wickets: 27,
      basePrice: 120,
      soldPrice: 290,
    },
    {
      name: "Moeen Ali",
      tname: "England",
      runs: 3783,
      centuries: 12,
      halfCenturies: 22,
      average: 32.12,
      wickets: 8,
      basePrice: 129,
      soldPrice: 258,
    },
    {
      name: "Jonny Bairstow",
      tname: "England",
      runs: 7923,
      centuries: 25,
      halfCenturies: 34,
      average: 33.43,
      wickets: 16,
      basePrice: 48,
      soldPrice: 170,
    },
    {
      name: "Mark wood",
      tname: "England",
      runs: 492,
      centuries: 4,
      halfCenturies: 12,
      average: 22.34,
      wickets: 7,
      basePrice: 55,
      soldPrice: 349,
    },
    {
      name: "Jofra Archer",
      tname: "England",
      runs: 132,
      centuries: 0,
      halfCenturies: 1,
      average: 12.34,
      wickets: 32,
      basePrice: 26,
      soldPrice: 125,
    },
    {
      name: "Jason Roy",
      tname: "England",
      runs: 4434,
      centuries: 21,
      halfCenturies: 29,
      average: 34.26,
      wickets: 12,
      basePrice: 86,
      soldPrice: 146,
    },
    {
      name: "Chris woakes",
      tname: "England",
      runs: 20177,
      centuries: 45,
      halfCenturies: 62,
      average: 56.55,
      wickets: 21,
      basePrice: 82,
      soldPrice: 140,
    },
    {
      name: "Tom curran",
      tname: "England",
      runs: 298,
      centuries: 0,
      halfCenturies: 2,
      average: 12.33,
      wickets: 5,
      basePrice: 90,
      soldPrice: 180,
    },
  ],
});

const spain = new Team({
  players: [
    {
      name: "Paul Hennesy",
      tname: "Spain",
      runs: 214,
      centuries: 1,
      halfCenturies: 2,
      average: 30.6,
      wickets: 18,
      basePrice: 56,
      soldPrice: 340,
    },

    {
      name: "Farzan Afzal",
      tname: "Spain",
      runs: 141,
      centuries: 1,
      halfCenturies: 3,
      average: 20.4,
      wickets: 14,
      basePrice: 29,
      soldPrice: 204,
    },

    {
      name: "Awais Ahmed",
      tname: "Spain",
      runs: 170,
      centuries: 1,
      halfCenturies: 4,
      average: 42.3,
      wickets: 12,
      basePrice: 28,
      soldPrice: 143,
    },

    {
      name: "Kludeep lal",
      tname: "Spain",
      runs: 116,
      centuries: 0,
      halfCenturies: 1,
      average: 20.3,
      wickets: 9,
      basePrice: 89,
      soldPrice: 100,
    },

    {
      name: "Jack Perman",
      tname: "Spain",
      runs: 100,
      centuries: 0,
      halfCenturies: 1,
      average: 10.33,
      wickets: 12,
      basePrice: 67,
      soldPrice: 239,
    },

    {
      name: "Raja Adeel",
      tname: "Spain",
      runs: 120,
      centuries: 0,
      halfCenturies: 1,
      average: 14.2,
      wickets: 10,
      basePrice: 69,
      soldPrice: 130,
    },

    {
      name: "Taqueer Hussain",
      tname: "Spain",
      runs: 687,
      centuries: 1,
      halfCenturies: 5,
      average: 40.6,
      wickets: 20,
      basePrice: 40,
      soldPrice: 138,
    },

    {
      name: "Ravi Panchal",
      tname: "Spain",
      runs: 629,
      centuries: 4,
      halfCenturies: 9,
      average: 41.2,
      wickets: 14,
      basePrice: 29,
      soldPrice: 132,
    },

    {
      name: "Tom Vine",
      tname: "Spain",
      runs: 296,
      centuries: 1,
      halfCenturies: 3,
      average: 41.34,
      wickets: 10,
      basePrice: 60,
      soldPrice: 146,
    },

    {
      name: "Nadim Hussain Naureen",
      tname: "Spain",
      runs: 389,
      centuries: 2,
      halfCenturies: 9,
      average: 14.56,
      wickets: 15,
      basePrice: 74,
      soldPrice: 179,
    },

    {
      name: "Vinod Kumar",
      tname: "Spain",
      runs: 9965,
      centuries: 4,
      halfCenturies: 10,
      average: 56.45,
      wickets: 34,
      basePrice: 60,
      soldPrice: 260,
    },
  ],
});

const newZealand = new Team({
  players: [
    {
      name: "Kane Williamson",
      tname: "New Zealand",
      runs: 12342,
      centuries: 21,
      halfCenturies: 32,
      average: 67.88,
      wickets: 72,
      basePrice: 29,
      soldPrice: 120,
    },
    {
      name: "Ross Taylor",
      tname: "New Zealand",
      runs: 15808,
      centuries: 19,
      halfCenturies: 33,
      average: 46.1,
      wickets: 3,
      basePrice: 34,
      soldPrice: 127,
    },
    {
      name: "Kyle Jamieson",
      tname: "New Zealand",
      runs: 300,
      centuries: 0,
      halfCenturies: 1,
      average: 34.66,
      wickets: 12,
      basePrice: 89,
      soldPrice: 198,
    },
    {
      name: "Trent boult",
      tname: "New Zealand",
      runs: 835,
      centuries: 0,
      halfCenturies: 1,
      average: 24.55,
      wickets: 470,
      basePrice: 69,
      soldPrice: 159,
    },
    {
      name: "Tim Southee",
      tname: "New Zealand",
      runs: 6303,
      centuries: 1,
      halfCenturies: 3,
      average: 34.02,
      wickets: 185,
      basePrice: 37,
      soldPrice: 129,
    },
    {
      name: "Ish Sodhi",
      tname: "New Zealand",
      runs: 457,
      centuries: 0,
      halfCenturies: 2,
      average: 24.55,
      wickets: 137,
      basePrice: 30,
      soldPrice: 159,
    },
    {
      name: "James Neesham",
      tname: "New Zealand",
      runs: 2180,
      centuries: 34,
      halfCenturies: 10,
      average: 33.76,
      wickets: 88,
      basePrice: 70,
      soldPrice: 189,
    },
    {
      name: "Tom Latham",
      tname: "New Zealand",
      runs: 567,
      centuries: 1,
      halfCenturies: 3,
      average: 34.56,
      wickets: 25,
      basePrice: 38,
      soldPrice: 170,
    },
    {
      name: "Lockie Ferguson",
      tname: "New Zealand",
      runs: 70,
      centuries: 0,
      halfCenturies: 0,
      average: 13.64,
      wickets: 83,
      basePrice: 160,
      soldPrice: 240,
    },
    {
      name: "Colin Grandhom",
      tname: "New Zealand",
      runs: 1478,
      centuries: 1,
      halfCenturies: 5,
      average: 43.5,
      wickets: 47,
      basePrice: 340,
      soldPrice: 1256,
    },
    {
      name: "Tom Blundell",
      tname: "New Zealand",
      runs: 486,
      centuries: 2,
      halfCenturies: 3,
      average: 23.34,
      wickets: 12,
      basePrice: 394,
      soldPrice: 1204,
    },
  ],
});
const southAfrica = new Team({
  players: [
    {
      name: "Quinton de Kock",
      tname: "South Arica",
      runs: 8069,
      centuries: 5,
      halfCenturies: 21,
      average: 57.56,
      wickets: 23,
      basePrice: 26,
      soldPrice: 148,
    },
    {
      name: "Faf du Plessis",
      tname: "South Arica",
      runs: 9408,
      centuries: 9,
      halfCenturies: 21,
      average: 43.65,
      wickets: 45,
      basePrice: 91,
      soldPrice: 193,
    },
    {
      name: "Kagiso Rabada",
      tname: "South Arica",
      runs: 865,
      centuries: 0,
      halfCenturies: 0,
      average: 15.65,
      wickets: 37,
      basePrice: 77,
      soldPrice: 182,
    },
    {
      name: "Janneman Malan",
      tname: "South Arica",
      runs: 2202,
      centuries: 1,
      halfCenturies: 0,
      average: 60.28,
      wickets: 34,
      basePrice: 39,
      soldPrice: 193,
    },
    {
      name: "David Miller",
      tname: "South Arica",
      runs: 6573,
      centuries: 5,
      halfCenturies: 14,
      average: 40.32,
      wickets: 12,
      basePrice: 59,
      soldPrice: 183,
    },
    {
      name: "Lungi Ngidi",
      tname: "South Arica",
      runs: 1516,
      centuries: 3,
      halfCenturies: 6,
      average: 26.45,
      wickets: 68,
      basePrice: 182,
      soldPrice: 254,
    },
    {
      name: "Kyle Veereynne",
      tname: "South Arica",
      runs: 3616,
      centuries: 2,
      halfCenturies: 5,
      average: 23.33,
      wickets: 256,
      basePrice: 84,
      soldPrice: 124,
    },
    {
      name: "Imran Thair",
      tname: "South Arica",
      runs: 287,
      centuries: 1,
      halfCenturies: 2,
      average: 13.24,
      wickets: 293,
      basePrice: 59,
      soldPrice: 193,
    },
    {
      name: "JP Dminy",
      tname: "South Arica",
      runs: 4037,
      centuries: 10,
      halfCenturies: 8,
      average: 38.65,
      wickets: 155,
      basePrice: 49,
      soldPrice: 139,
    },
    {
      name: "Tabraiz Shamsi",
      tname: "South Arica",
      runs: 525,
      centuries: 4,
      halfCenturies: 9,
      average: 20.45,
      wickets: 52,
      basePrice: 29,
      soldPrice: 134,
    },
    {
      name: "Andile Phehlukwa",
      tname: "South Arica",
      runs: 2297,
      centuries: 5,
      halfCenturies: 8,
      average: 34.4,
      wickets: 115,
      basePrice: 76,
      soldPrice: 340,
    },
  ],
});
const sriLanka = new Team({
  players: [
    {
      name: " Lasith Malinga",
      tname: "Sri Lanka",
      runs: 1066,
      centuries: 1,
      halfCenturies: 3,
      average: 9.45,
      wickets: 716,
      basePrice: 27,
      soldPrice: 340,
    },

    {
      name: "Angelo Mathews",
      tname: "Sri Lanka",
      runs: 13654,
      centuries: 13,
      halfCenturies: 81,
      average: 27.45,
      wickets: 218,
      basePrice: 74,
      soldPrice: 173,
    },

    {
      name: "Dimuth Karunaratne",
      tname: "Sri Lanka",
      runs: 5211,
      centuries: 9,
      halfCenturies: 29,
      average: 31.5,
      wickets: 2,
      basePrice: 39,
      soldPrice: 132,
    },

    {
      name: "Kusal Mendis",
      tname: "Sri Lanka",
      runs: 5646,
      centuries: 9,
      halfCenturies: 33,
      average: 28.54,
      wickets: 8,
      basePrice: 63,
      soldPrice: 253,
    },

    {
      name: "Dhananjaya de silva",
      tname: "Sri Lanka",
      runs: 8635,
      centuries: 22,
      halfCenturies: 35,
      average: 55.15,
      wickets: 48,
      basePrice: 69,
      soldPrice: 154,
    },

    {
      name: "Kusal perera",
      tname: "Sri Lanka",
      runs: 9758,
      centuries: 20,
      halfCenturies: 49,
      average: 48.56,
      wickets: 34,
      basePrice: 35,
      soldPrice: 149,
    },

    {
      name: "Thisara perera",
      tname: "Sri Lanka",
      runs: 4142,
      centuries: 1,
      halfCenturies: 10,
      average: 20.75,
      wickets: 265,
      basePrice: 74,
      soldPrice: 341,
    },

    {
      name: "Wanindu Hasaranga",
      tname: "Sri Lanka",
      runs: 313,
      centuries: 2,
      halfCenturies: 3,
      average: 14.5,
      wickets: 33,
      basePrice: 95,
      soldPrice: 199,
    },

    {
      name: "Avishka Fernando",
      tname: "Sri Lanka",
      runs: 848,
      centuries: 2,
      halfCenturies: 3,
      average: 24.5,
      wickets: 12,
      basePrice: 57,
      soldPrice: 162,
    },

    {
      name: "Suranga Lakmal",
      tname: "Sri Lanka",
      runs: 1087,
      centuries: 3,
      halfCenturies: 6,
      average: 7.33,
      wickets: 266,
      basePrice: 34,
      soldPrice: 46,
    },

    {
      name: "Isuru udana",
      tname: "Sri Lanka",
      runs: 465,
      centuries: 2,
      halfCenturies: 4,
      average: 13.45,
      wickets: 46,
      basePrice: 123,
      soldPrice: 234,
    },
  ],
});

const matchSchema = new mongoose.Schema({
  t1: String,
  t2: String,
  date:String,
  result: String,
});

const Match = mongoose.model("Match", matchSchema);
const m1 = new Match(
  {
  t1: "India",
  t2: "Australia",
  date:"2020-04-20",
  result: "India won by 6 wickets",
}
);

// IND.save();
india.save();
australia.save();
sriLanka.save();
southAfrica.save();
newZealand.save();
spain.save();
england.save();

m1.save();
