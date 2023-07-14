import { CREATE_POKEMON, FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_DETAIL, GET_TYPES, ORDER_BY_ATTACK, ORDER_BY_NAME, SET_PAGE } from "./action-types";


const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    pokemonDetail: [],
    types: [],
    pokemonsCreated: [],
    currentPage: 1,
    loader: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_POKEMONS:

            return {
                ...state,
                pokemons: action.payload,
                pokemonsCopy: action.payload,
                pokemonDetail: [],
                loader: true,
            };

        case GET_POKEMON_DETAIL:

            return {
                ...state,
                pokemonDetail: action.payload,
                
            };

        case GET_POKEMON_BY_NAME:

            let pokeCopy = [...state.pokemonsCopy]
            return {
                ...state,
                currentPage: 1,
                pokemons: pokeCopy.filter(pokemon => pokemon.name.includes(action.payload.trim()))
            };

        case CREATE_POKEMON:

            return {
                ...state,
                pokemonsCreated: action.payload
            }

    

        case GET_TYPES:

            return {
                ...state,
                types: action.payload
            };

        case FILTER_BY_TYPE:

            if (action.payload === "allTypes") {

                return {
                    ...state,
                    pokemons: [...state.pokemonsCopy] // Usar el arreglo original de pokemones
                };

            } else {

                return {
                    ...state,
                    currentPage: 1,
                    pokemons: [...state.pokemonsCopy].filter(pokemon => {

                        if (pokemon.createBD) {

                            return pokemon.Types && pokemon.Types.map(p => p.name).includes(action.payload)

                        } else {

                            return pokemon.types && pokemon.types.includes(action.payload)
                        }
                    })
                };
            };

        case FILTER_BY_ORIGIN:

            const allPokemons = state.pokemonsCopy;

            const origin = action.payload === 'pokemonsDB' ? allPokemons.filter(p => p.createBD) : allPokemons.filter(p => !p.createBD)

            return {
                ...state,
                currentPage: 1,
                pokemons: action.payload === 'all' ? allPokemons : origin
            }

        case ORDER_BY_NAME:

            if (action.payload === 'A-Z') {
                return {
                    ...state,
                    currentPage: 1,
                    pokemons: [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name))
                }
            } else if ((action.payload === 'Z-A')) {
                return {
                    ...state,
                    currentPage: 1,
                    pokemons: [...state.pokemons].sort((a, b) => b.name.localeCompare(a.name))
                }
            };

            break

        case ORDER_BY_ATTACK:

            if (action.payload === 'lowestAttack') {
                return {
                    ...state,
                    pokemons: [...state.pokemons].sort((a, b) => a.attack - b.attack)
                }
            } else if (action.payload === 'highestAttack') {
                return {
                    ...state,
                    pokemons: [...state.pokemons].sort((a, b) => b.attack - a.attack)
                }
            };
            break;
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        default:
            return state;
    }

}


export default reducer;