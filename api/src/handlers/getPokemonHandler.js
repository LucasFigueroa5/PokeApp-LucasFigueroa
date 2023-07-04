const { getAllPokemons, getApiPokemons, getDbPokemons } = require("../controllers/getPokemonController")


const getPokemons = async (req, res) => {
    try {
        const { name } = req.query;
        
        if (name) {
            const pokemon = await getPokemonByName(name.toLowerCase());
            if (!pokemon){
                throw new Error("Pokemon not founded");
            } return res.status(200).send(pokemon);
        }
        const pokemons = await getAllPokemons();
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

};
const getPokemonsAPI = async (req, res) => {
    try {
        const { name } = req.query;
        
        if (name) {
            const pokemon = await getPokemonByName(name.toLowerCase());
            if (!pokemon){
                throw new Error("Pokemon not founded");
            } return res.status(200).send(pokemon);
        }
        const pokemonsAPI = await getApiPokemons();
        res.status(200).json(pokemonsAPI);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

};
const getPokemonsDB = async (req, res) => {
    try {
        const { name } = req.query;
        
        if (name) {
            const pokemon = await getPokemonByName(name.toLowerCase());
            if (!pokemon){
                throw new Error("Pokemon not founded");
            } return res.status(200).send(pokemon);
        }
        const pokemonsDB = await getDbPokemons();
        res.status(200).json(pokemonsDB);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

};


module.exports = {
    getPokemons,
    getPokemonsAPI,
    getPokemonsDB,
};

