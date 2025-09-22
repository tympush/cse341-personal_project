const express = require("express");
const router = express.Router();

const weaponsController = require("../controllers/weapons");
const validation = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", weaponsController.getAll);

router.get("/:id", weaponsController.getSingle);

router.post("/", isAuthenticated, validation.saveWeapon, weaponsController.createWeapon);

router.put("/:id", isAuthenticated, validation.saveWeapon, weaponsController.updateWeapon);

router.delete("/:id", isAuthenticated, weaponsController.deleteWeapon);

module.exports = router;