const express = require("express");
const router = express.Router();

const weaponsController = require("../controllers/weapons");
const validation = require("../middleware/validate");

router.get("/", weaponsController.getAll);

router.get("/:id", weaponsController.getSingle);

router.post("/", validation.saveWeapon, weaponsController.createWeapon);

router.put("/:id", validation.saveWeapon, weaponsController.updateWeapon);

router.delete("/:id", weaponsController.deleteWeapon);

module.exports = router;