const axios = require('axios');
const {Pokemons, Type} = require('../db.js')

const getPokemonById = async (id) => {
    try {
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const result = response.data;
        return {
            id: result.id,
            name: result.name,
            hp: result.stats.find((stat) => stat.stat.name === 'hp')?.base_stat,
            attack: result.stats.find((stat) => stat.stat.name === 'attack')?.base_stat,
            defense: result.stats.find((stat) => stat.stat.name === 'defense')?.base_stat,
            speed: result.stats.find((stat) => stat.stat.name === 'speed')?.base_stat,
            height: result.height,
            weight: result.weight,
            imgUrl: result.sprites.other.home.front_default,
            custom: false,
            types: result.types.map((type) => type.type.name)
        };
        
    } catch (error) {
    
            const result = await Pokemons.findByPk(id, {
                include: {
                    model: Type,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            });

            return {
                id: result.id,
                name: result.name,
                hp: result.hp,
                attack: result.attack,
                defense: result.defense,
                speed: result.speed,
                height: result.height,
                weight: result.weight,
                imgUrl: result.imgUrl,
                custom: result.custom,
                types: result.Types.map((type) => type.name)
            };
        }        
    }
   



module.exports = getPokemonById;
