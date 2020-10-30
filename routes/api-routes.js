const Workout = require("../models/WorkoutModel");
const Mongoose  = require("mongoose");

const Range = function findRange(workouts) {
    workoutS = []
    const emptyWorkout = {
        exercises : [],
        timeSpentMakingGains: 0
    }
    var dayOfTheWeek = new Date(Date.now()).getDay()
    for (x = 0; x <= dayOfTheWeek; x++) {
        if (workouts[x]) {
            workoutS.unshift(workouts[x]);
        }
        else {
            workoutS.unshift(emptyWorkout);
        };
    }

    return workoutS;
}

module.exports = function (app) {
    console.log('Engaging api-routes.js');

    app.get("/api/workouts", async (req, res) => {
        var workouts = await workOut.find();
        for (const workout of workouts) {
            await workout.setTotalDuration()
        }
        res.json(workouts);
    });

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body).then(data => {
            res.json(data)
        })
    });

    app.put("/api/workouts/:id", async (req, res) => {
        var workoutId = req.params.id
        Workout.findOneAndUpdate({ _id: Mongoose.Types.ObjectId(workoutId) }, {
            $push: {
                exercises: req.body
            }
        }).then(data => {
            res.json(data)
        })
        
    });

    app.get("/api/workouts/range", async (req, res) => {
        console.log('workouts and range api route.');
        Workout.find().then(data => {
            res.json(data);
        }).catch(err => alert(err))
    });
}