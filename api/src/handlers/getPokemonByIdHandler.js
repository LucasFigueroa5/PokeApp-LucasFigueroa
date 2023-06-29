const { getPokemonById, getPokemonByIdFromDb } = require("../controllers/getPokemonByIdController");


const getPokemonByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        if (id < 252 ) {
            const response = await getPokemonById(id);
            return res.status(200).send(response);
        } else {
            const fromDb = await getPokemonByIdFromDb(id);
            return res.status(200).send(fromDb);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = getPokemonByIdHandler;