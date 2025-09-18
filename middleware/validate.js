const validator = require('../helpers/validator');

const saveWeapon = (req, res, next) => {
    const validationRules = {
        weaponName: 'required|string',
        weaponType: 'required|string',
        rarity: 'required|string',
        damage: 'required|integer',
        weight: 'required|float',
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

module.exports = {
    saveWeapon
};