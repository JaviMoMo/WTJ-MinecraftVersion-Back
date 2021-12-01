const express = require("express");
const router = express.Router();

const { getAllHabitats, getHabitatById } = require("../controllers/habitat.controller");

router.get("/", getAllHabitats);
router.get("/id/:id", getHabitatById);

module.exports = router;