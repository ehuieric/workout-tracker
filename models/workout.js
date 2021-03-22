const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const { schema } = require("./Exercise");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type:Date,
        default: Date.now,
    },
    exercise: {
        type: Schema.Types.ObjectId,
        ref: "Exercise",
    },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

