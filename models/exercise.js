const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercise = new.Schema ("exercise", {
    type: String,
    name: String,
    duration: Number,
    sets: Number,
    reps: Number,
    RPE: Number,
    distance: Number
});

const exercises = mongoose.model(exercise);
model.exports = exercise;