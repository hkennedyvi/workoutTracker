const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const db = require("./models");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds143326.mlab.com:43326/heroku_7q3pfpsd", { useNewUrlParser: true });

app.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id,
    { $push: { exercises: body } })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//HTML ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/stats", (req, res) => {
  res.redirect("./stats.html");
});

app.get("/exercise", (req, res) => {
  res.redirect("./exercise.html");
});

//API ROUTES
app.get("/api/workouts/", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/workouts/", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}, (err, data) => {
  })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});