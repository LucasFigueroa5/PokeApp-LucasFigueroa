import { CREATE_POKEMON, FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_DETAIL, GET_TYPES, ORDER_BY_ATTACK, ORDER_BY_NAME, SET_PAGE} from "./action-types.js";
import axios from 'axios';



export const getAllPokemons = () => {
    return async (dispatch) => {  
        try {
            const allPokemons = await axios.get('pokemons'); // traigo los pokemons de mi servidor (API)
            return dispatch({
                type: GET_ALL_POKEMONS,  // Declaro cual accion es
                payload: allPokemons.data  // el dato que le pasamos al Store para actualizar mi estado
            })

        } catch (error) {
        }
    }

};


export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const pokemons = await axios.get(`pokemons/${id}`);
            return dispatch({
                type: GET_POKEMON_DETAIL,
                payload: pokemons.data
            });
        } catch (error) {
        }
    };

};

export const getPokemonByName = (name) => {
    return {
        type: GET_POKEMON_BY_NAME,
        payload: name,
    }

};


export const createPokemon = (form) => {
    return async dispatch => {
        try {
            const data = await axios.post('pokemons', form);
            return dispatch({
                type: CREATE_POKEMON,
                payload: data.data
            })
        } catch (error) {

        }
    };
};



export const getTypes = () => {
    return async dispatch => {
        try {
            const getType = await axios.get('types');
            return dispatch({
                type: GET_TYPES,
                payload: getType.data
            });

        } catch (error) {

        }
    };
};

export const filterByType = (pokemonType) => {
    return {
        type: FILTER_BY_TYPE,
        payload: pokemonType
    }
};

export const filterByOrigin = (payload) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
};




export const orderByName = (payload) => {
    return ({
        type: ORDER_BY_NAME,
        payload
    })
};
export const orderByAttack = (payload) => {
    return ({
        type: ORDER_BY_ATTACK,
        payload
    })
};

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    };
};
