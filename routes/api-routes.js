const Workout = require("../Develop/models/work_out.js");
const Mongoose  = require("mongoose");

const Range = function findRange(tracker) {
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

    app.get("/api/tracker", async (req, res) => {
        var workouts = await workOut.find();
        for (const workout of workouts) {
            await workout.setTotalDuration()
        }
        res.json(workouts);
    });

    app.post("/api/tracker", (req, res) => {
        Workout.create(req.body).then(data => {
            res.json(data)
        })
    });

    app.put("/api/tracker/:id", async (req, res) => {
        var workoutId = req.params.id
        workOut.findOneAndUpdate({ _id: Mongoose.Types.ObjectId(workoutId) }, {
            $push: {
                exercises: req.body
            }
        }).then(data => {
            res.json(data)
        })
        
    });

    app.get("/api/tracker/range", async (req, res) => {
        console.log('workouts and range api route.');
        workOut.find().then(data => {
            res.json(data);
        }).catch(err => alert(err))
    });
}