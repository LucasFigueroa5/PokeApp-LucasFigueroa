const getPokemonById  = require("../controllers/getPokemonByIdController");


const getPokemonByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getPokemonById(id);
        return res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = getPokemonByIdHandler;