const validator = require('../helpers/validator');

const saveWeapon = (req, res, next) => {
    const validationRules = {
        weaponName: 'required|string',
        weaponType: 'required|string',
        rarity: 'required|string',
        damage: 'required|integer',
        weight: 'required|numeric',
        durability: 'required|integer',
        effect: 'required|string',
        description: 'required|string'
    };

    validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(412).json({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveEnemy = (req, res, next) => {
    const validationRules = {
        enemyName: 'required|string',
        enemyRace: 'required|string',
        enemyLevel: 'required|integer',
        enemyDifficulty: 'required|string',
        enemyHealth: 'required|integer',
        enemyArmor: 'required|integer',
        enemyDamage: 'required|integer',
        enemyDescription: 'required|string'
    };

    validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(412).json({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveWeapon,
    saveEnemy
};