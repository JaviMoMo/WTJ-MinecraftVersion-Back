const Collaboration = require("../models/Collaboration.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const postCollaboration = async (req, res, next) => {
    try {
        const newCollaboration = new Collaboration();
        newCollaboration.name = req.body.name;
        newCollaboration.email = req.body.email;
        newCollaboration.habitat = req.body.habitat;
        newCollaboration.family = req.body.family;
        newCollaboration.animal = req.body.animal;

        const collaborationDb = await newCollaboration.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: collaborationDb
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = { postCollaboration };