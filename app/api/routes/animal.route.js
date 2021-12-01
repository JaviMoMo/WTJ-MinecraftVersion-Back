const express = require("express");
const router = express.Router();

const { getAllAnimals, getAnimalById, getFilteredAnimal } = require("../controllers/animal.controller");

router.get("/", getAllAnimals);
router.get("/id/:id", getAnimalById);
router.get("/items", getFilteredAnimal);

module.exports = router;