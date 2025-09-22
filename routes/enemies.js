const express = require("express");
const router = express.Router();

const enemiesController = require("../controllers/enemies");
const validation = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", enemiesController.getAll);

router.get("/:id", enemiesController.getSingle);

router.post("/", isAuthenticated, validation.saveEnemy, enemiesController.createEnemy);

router.put("/:id", isAuthenticated, validation.saveEnemy, enemiesController.updateEnemy);

router.delete("/:id", isAuthenticated, enemiesController.deleteEnemy);

module.exports = router;