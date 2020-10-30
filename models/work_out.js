const mongoose = require("mongoose");
const Exercise = require("./exercise");

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


const wod = mongoose.model("Workout", workOutSchema);
module.exports = wod;