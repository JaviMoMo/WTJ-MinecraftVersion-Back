const Family = require("../models/Family.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllFamilies = async (req, res, next) => {
    try {
        const families = await Family.find().populate("habitat");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { families: families }
        });
    } catch (error) {
        return next(error);
    }
}

const getFamilyById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const family = await Family.findById(id);
        if (family) {
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { family: family }
            });
        } else {
            return res.json({
                status: 404,
                message: HTTPSTATUSCODE[404],
                data: { family: family }
            })
        }
    } catch (error) {
        return next(error);
    }
}

const getFilteredFamily = async (req, res, next) => {
    try {
        const filters = req.query;
        const families = await Family.find(filters);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { families: families }
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = { getAllFamilies, getFamilyById, getFilteredFamily }