const axios = require("axios");
const { Pokemons, Type } = require('../db.js');


const getApiPokemons = async () => {
    try {
        const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const allPokemons = apiUrl.data.results;
        const pokemonDetail = await Promise.all( // espera q se cumplan muchas promesas ya que es una iteracion asincrona por ej para un mapeo asincrono
            allPokemons.map(async (pokemon) => { // sin esto tendria como res, un array de promesas pendientes.
                const { data } = await axios.get(pokemon.url);
                const { id, name, types, sprites, stats, height, weight } = data;
                return {
                    id,
                    name,
                    types: types.map((type) => type.type.name),
                    imgUrl: sprites.other.home.front_default,
                    hp: stats.find((stat) => stat.stat.name === 'hp')?.base_stat,
                    attack: stats.find((stat) => stat.stat.name === 'attack')?.base_stat,
                    defense: stats.find((stat) => stat.stat.name === 'defense')?.base_stat,
                    speed: stats.find((stat) => stat.stat.name === 'speed')?.base_stat,
                    height,
                    weight,
                };
            })
        );
        return pokemonDetail;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getDbPokemons = async () => {
    try {
        const pokemons = await Pokemons.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
       
        return pokemons;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getAllPokemons = async () => {
    const apiPokemons = await getApiPokemons();
    const dbPokemons = await getDbPokemons();
    const allPokemons = [...apiPokemons, ...dbPokemons];

    return allPokemons;
}



module.exports = {
    getApiPokemons,
    getDbPokemons,
    getAllPokemons,
}