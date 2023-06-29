const { Router } = require('express');
const getPokemons  = require('../handlers/getPokemonHandler.js');
const getTypesHandler = require('../handlers/getTypeHandler.js');
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler.js');
const getPokemonNameHandler = require('../handlers/getPokemonNameHandler.js');
const handlerCreate = require('../handlers/postPokemonHandler.js');



const router = Router();

router.get('/types', getTypesHandler)
router.get('/pokemons', getPokemons)
router.get('/pokemons/name', getPokemonNameHandler)
router.get('/pokemons/:id',getPokemonByIdHandler);
router.post('/pokemons', handlerCreate)



module.exports = router;
