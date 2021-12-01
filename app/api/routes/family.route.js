const express = require("express");
const router = express.Router();

const { getAllFamilies, getFamilyById, getFilteredFamily } = require("../controllers/family.controller");

router.get("/", getAllFamilies);
router.get("/id/:id", getFamilyById);
router.get("/items", getFilteredFamily);

module.exports = router;