const express = require("express");
const router = express.Router();

const weaponsController = require("../controllers/weapons");
const validation = require("../middleware/validate");

router.get("/", enemiesController.getAll);

router.get("/:id", enemiesController.getSingle);

router.post("/", validation.saveEnemy, enemiesController.createEnemy);

router.put("/:id", validation.saveEnemy, enemiesController.updateEnemy);

router.delete("/:id", enemiesController.deleteEnemy);

module.exports = router;