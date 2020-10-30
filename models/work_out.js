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
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
});

const workOut = new Schema("Work out", {

    day: {},
    exercise: {},
    duration: {}


});