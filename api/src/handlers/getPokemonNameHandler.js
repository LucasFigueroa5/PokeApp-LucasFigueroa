const getPokemonName = require('../controllers/getPokemonName.js')


module.exports = async (req, res) => {
    try {
        const { name } = req.query;
        
        if (name) {
            const nameToLower = name.toLowerCase()         
            const allPokemons = await getPokemonName(nameToLower);
            res.status(200).json(allPokemons);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

