const mongoose = require("mongoose");
const exacise = require("./exercise");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    sets: {
        type: Number,

    },
    reps: {
        type: Number,
    },

    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },

});

const workOutSchema = new Schema("Work out", {

    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: Array,
        default: []
    },
    timeSpentMakingGains: {
        type: Number,
        default: 0
    },
    weightTotal: {
        type: Number,
        default: 0
    }


});

workOutSchema.methods.setTotalDuration = function () {

    console.log("Create set duration function")
    for (const exercise of this.exercises) 
    {
        console.log(exercise);
        this.timeSpentMakingGains += exercise.duration;
    }
    console.log("test duration");
    console.log(this.timeSpentMakingGains);
    return this.timeSpentMakingGains;
}
workOutSchema.methods.findRange = function (workouts) {
    workoutS = [];
    const emptyWorkout = {
        exercises: [],
        timeSpentMakingGains: 0
    };
    var dayOfTheWeek = new Date(Date.now()).getDay();

    for (x = 0; x <= dayOfTheWeek; x++) {
        if (workouts[x]) {
            workoutS.unshift(workouts[x])
        }
        else {
            workoutS.unshift(emptyWorkout)
        };
    }

    return workoutS;
}

const wod = mongoose.model("Workout", workOutSchema);
module.exports = wod;