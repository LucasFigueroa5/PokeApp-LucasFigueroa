const { Pokemons } = require("../db");
const { Type } = require("../db");


const createPokemon = async ({ name, hp, attack, defense, speed, height, weight, imgUrl, types }) => {
    try {
        const newPokemon = await Pokemons.create(
            {
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                imgUrl,
            }

        );

        const myType = await Type.findAll({
            where: {
                name: types
            }
        })
        const myPokemon = await newPokemon.addTypes(myType);

        const pokeRelation = await Pokemons.findOne({
            where: {
                id: newPokemon.id,
            },
            include: [{
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        })

        return pokeRelation;
    }

    catch (error) {
        throw Error("No se pudo crear el pokemon")
    }
}

module.exports = createPokemon;