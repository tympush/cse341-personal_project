const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  //#swagger.tags = ['enemies']
  try {
    const result = await mongodb
      .getDb()
      .db("personal_project")
      .collection("enemies")
      .find();
    const enemies = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(enemies);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Must use a valid enemy id to find an enemy.");
  }
  //#swagger.tags = ['enemies']
  try {
    const enemyId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("personal_project")
      .collection("enemies")
      .find({ _id: enemyId });
    const enemies = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(enemies[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createEnemy = async (req, res) => {
  //#swagger.tags = ['enemies']
  const enemy = {
    enemyName: req.body.enemyName,
    enemyRace: req.body.enemyRace,
    enemyLevel: req.body.enemyLevel,
    enemyDifficulty: req.body.enemyDifficulty,
    enemyHealth: req.body.enemyHealth,
    enemyArmor: req.body.enemyArmor,
    enemyDamage: req.body.enemyDamage,
    enemyDescription: req.body.enemyDescription
  };
  const response = await mongodb.getDb().db("personal_project").collection("enemies").insertOne(enemy);
  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while creating the enemy.");
  }
};

const updateEnemy = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid enemy id to update an enemy.");
  }
  //#swagger.tags = ['enemies']
  const enemyId = new ObjectId(req.params.id);
  const enemy = {
    enemyName: req.body.enemyName,
    enemyRace: req.body.enemyRace,
    enemyLevel: req.body.enemyLevel,
    enemyDifficulty: req.body.enemyDifficulty,
    enemyHealth: req.body.enemyHealth,
    enemyArmor: req.body.enemyArmor,
    enemyDamage: req.body.enemyDamage,
    enemyDescription: req.body.enemyDescription
  };
  const response = await mongodb.getDb().db("personal_project").collection("enemies").replaceOne({ _id: enemyId }, enemy);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while updating the enemy.");
  }
};

const deleteEnemy = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid enemy id to delete an enemy.");
  }
  //#swagger.tags = ['enemies']
  const enemyId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db("personal_project").collection("enemies").deleteOne({ _id: enemyId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while deleting the enemy.");
  }
};

module.exports = {
  getAll,
  getSingle,
  createEnemy,
  updateEnemy,
  deleteEnemy,
};