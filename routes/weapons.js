const express = require("express");
const router = express.Router();

const weaponsController = require("../controllers/weapons");
//const validation = require("../middleware/validate");

router.get("/", weaponsController.getAll);

router.get("/:id", weaponsController.getSingle);

router.post("/", weaponsController.createWeapon);

router.put("/:id", weaponsController.updateWeapon);

router.delete("/:id", weaponsController.deleteWeapon);

module.exports = router;