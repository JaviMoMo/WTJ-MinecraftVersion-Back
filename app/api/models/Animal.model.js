const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema(
    {
        name: { type: String, trim: true, required: true},
        isBad: { type: Boolean, trim: true, required:true},
        family: [{type: Schema.Types.ObjectId, ref: "family"}],
        img: { type: String, trim: true, required: true}
    },
    {
        timestamps: true
    }
);

const Animal = mongoose.model("animals", AnimalSchema);
module.exports = Animal;

/* family: [{ type: Schema.Types.ObjectId, ref: "family" }], */