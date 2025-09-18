const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['weapons']
  const result = await mongodb
    .getDb()
    .db("personal_project")
    .collection("weapons")
    .find();
  result.toArray().then((weapons) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(weapons);
  });
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid weapon id to find a weapon.");
  }
  
  //#swagger.tags = ['weapons']
  const weaponsId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("personal_project")
    .collection("weapons")
    .find({ _id: weaponsId });
  result.toArray().then((weapons) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(weapons[0]);
  });
};

const createWeapon = async (req, res) => {
  //#swagger.tags = ['weapons']
  const weapon = {
    weaponName: req.body.weaponName,
    weaponType: req.body.weaponType,
    rarity: req.body.rarity,
    damage: req.body.damage,
    weight: req.body.weight,
    durability: req.body.durability,
    effect: req.body.effect,
    description: req.body.description
  };
  const response = await mongodb.getDb().db("personal_project").collection("weapons").insertOne(weapon);
  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while updating the weapon.");
  }
};

const updateWeapon = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid weapon id to update a weapon.");
  }
  
  //#swagger.tags = ['weapons']
  const weaponId = new ObjectId(req.params.id);
  const weapon = {
    weaponName: req.body.weaponName,
    weaponType: req.body.weaponType,
    rarity: req.body.rarity,
    damage: req.body.damage,
    weight: req.body.weight,
    durability: req.body.durability,
    effect: req.body.effect,
    description: req.body.description
  };
  const response = await mongodb.getDb().db("personal_project").collection("weapons").replaceOne({ _id: weaponId }, weapon);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while updating the weapon.");
  }
};

const deleteWeapon = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid weapon id to delete a weapon.");
  }
  
  //#swagger.tags = ['weapons']
  const weaponId = new ObjectId(req.params.id);
  const weapon = {
    weaponName: req.body.weaponName,
    weaponType: req.body.weaponType,
    rarity: req.body.rarity,
    damage: req.body.damage,
    weight: req.body.weight,
    durability: req.body.durability,
    effect: req.body.effect,
    description: req.body.description
  };
  const response = await mongodb.getDb().db("personal_project").collection("weapons").deleteOne({ _id: weaponId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while updating the weapon.");
  }
};

module.exports = {
  getAll,
  getSingle,
  createWeapon,
  updateWeapon,
  deleteWeapon,
};