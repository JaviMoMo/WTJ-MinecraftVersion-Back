const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CollaborateSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true, unique: true },
        animal: {
            name: { type: String, trim: true },
            isBad: { type: Boolean, trim: true },
            family: [{ type: String }],
            img: { type: String, trim: true },
        },
        family: {
            name: { type: String, trim: true },
            livingInGroup: { type: Boolean, trim: true },
            habitat: [{ type: String, trim: true }],
            img: { type: String, trim: true },
        },
        habitat: {
            name: { type: String, trim: true },
            location: {
                x: { type: Number, trim: true },
                y: { type: Number, trim: true }
            },
            img: { type: String, trim: true },
        }
    },
    {
        timestamps: true
    }
);

const Collaborate = mongoose.model("collaborate", CollaborateSchema);
module.exports = Collaborate;