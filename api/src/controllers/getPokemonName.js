const axios = require('axios');
const { Pokemons } = require('../db.js');
const { Op } = require('sequelize');

module.exports = async (name) => {
    try {
      // Buscar en la base de datos por el nombre del Pokémon
      const searchDbName = await Pokemons.findOne({ where: { name:{ [ Op.iLike ]: `%${name}%` },
        }});
  
      if (searchDbName.length) {
        // Si se encuentra en la base de datos, lanzar un error
        throw Error();
      }
      // Devolver el resultado de la búsqueda en la base de datos
      return searchDbName;
    } catch (error) {
      // Si no se encuentra en la base de datos, hacer una solicitud a la API de Pokémon
      const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
      if (pokemonData) {
        // Si se encuentra en la API de Pokémon, construir un objeto con los datos relevantes
        const allPokemApi = {
          id: pokemonData.data.id,
          name: pokemonData.data.name,
          type: pokemonData.data.types.map((el) => el.type.name),
          hp: pokemonData.data.stats[0].base_stat,
          attack: pokemonData.data.stats[1].base_stat,
          defense: pokemonData.data.stats[2].base_stat,
          speed: pokemonData.data.stats[3].base_stat,
          height: pokemonData.data.height,
          weight: pokemonData.data.weight,
        };
  
        // Devolver el objeto con los datos del Pokémon desde la API
        return allPokemApi;
      }
    }
  };
  