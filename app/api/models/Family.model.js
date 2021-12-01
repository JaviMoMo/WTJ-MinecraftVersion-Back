const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FamilySchema = new Schema(
    {
        name: { type: String, trim: true, required: true},
        livingInGroup: { type: Boolean, trim: true, required:true},
        habitat: [{ type: Schema.Types.ObjectId, ref: "habitat" }],
        img: { type: String, trim: true, required: true}
    },
    {
        timestamps: true
    }
);

const Family = mongoose.model("family", FamilySchema);
module.exports = Family;

/* { type: Schema.Types.ObjectId, ref: "habitat", required: false} */