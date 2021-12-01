const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitatSchema = new Schema(
    {
        name: { type: String, trim: true, require: true},
        location: {
            x: { type: String, trim: true },
            y: { type: String, trim: true } 
        },
        img: { type: String, trim: true, require: true}
    },
    {
        timestamps: true
    }
);

const Habitat = mongoose.model("habitat", HabitatSchema);
module.exports = Habitat;