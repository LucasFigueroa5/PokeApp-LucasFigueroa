const { getTypes } = require('../controllers/getTypeController.js');
const { Type } = require('../db.js')

const getTypesHandler = async (req, res) => {
    try {
        await getTypes();
        const types = await Type.findAll();
        return res.json(types);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = getTypesHandler;