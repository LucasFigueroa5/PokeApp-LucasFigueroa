import { CREATE_POKEMON, FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_DETAIL, GET_TYPES, ORDER_BY_ATTACK, ORDER_BY_NAME } from "./action-types.js";
import axios from 'axios';



export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const allPokemons = await axios.get('http://localhost:3001/pokemons');
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: allPokemons.data
            })

        } catch (error) {
        }
    }

};


export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const details = await axios.get(`http://localhost:3001/pokemons/${id}`);
            return dispatch({
                type: GET_POKEMON_DETAIL,
                payload: details.data
            });
        } catch (error) {

        }
    };

};

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const pokemonName = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
            if (pokemonName.data) {
                return dispatch({
                    type: GET_POKEMON_BY_NAME,
                    payload: pokemonName.data,
                });
            } else {
                alert(`There is no Pokémon with this name "${name}"`);
            }
        } catch (error) {
        }
    };

};

export const createPokemon = (form) => {
    return async dispatch => {
        try {
            const data = await axios.post('http://localhost:3001/pokemons', form);
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
            const getType = await axios.get('http://localhost:3001/types');
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