import { CREATE_POKEMON, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_DETAIL, GET_TYPES, ORDER_BY_ATTACK, ORDER_BY_NAME } from "./action-types";


const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    pokemonsAPI: [],
    pokemonsDB: [],
    pokemonDetail: {},
    types: [],
    pokemonsCreated: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                pokemonsCopy: action.payload,
            };
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            };
        case GET_POKEMON_BY_NAME:
            let pokeCopy = [...state.pokemons]
            return {
                ...state,
                pokemons: pokeCopy.filter((pokemon) => pokemon.name === action.payload.name)
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
                    pokemons: [...state.pokemonsCopy].filter(pokemon => pokemon.types && pokemon.types.includes(action.payload))
                };
            };
        // case FILTER_BY_API:
        //     return {
        //     }
        // case FILTER_BY_DB:
        //     return {
        //     };
        case ORDER_BY_NAME:
            if (action.payload === 'A-Z') {
                return {
                    ...state,
                    pokemons: [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name))
                }

            } else if ((action.payload === 'Z-A')) {
                return {
                    ...state,
                    pokemons: [...state.pokemons].sort((a, b) => b.name.localeCompare(a.name))
                }
            };
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
        default:
            return state;
    }

}


export default reducer;