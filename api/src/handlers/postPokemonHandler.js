const { Op } = require("sequelize");
const { Pokemons } = require("../db");
const  createPokemon  = require('../controllers/postPokemonController');


const handlerCreate = async (req, res) => {

    const { name, hp, attack, defense, speed, height, weight, types } = req.body;

    if(!name || !hp || !attack || !defense || !speed || !height || !weight || !types){
        return res.status(404).json({msg: "Faltan datos del pokemon"});
    }
    if(types.length < 2){
        return res.status(404).json({msg: " Debe haber 2 types "});
    }

    const existPokemon = await Pokemons.findOne({where: {name: { [Op.iLike]: `%${name}%`}}})

    if(existPokemon){
        return res.status(404).json({msg: "El pokemon ya existe"})
    }

    const pokemon = await createPokemon(req.body);
    res.status(200).json({msg: "El pokemon se creo correctamente", pokemon: pokemon})

}

module.exports = handlerCreate ;