import { GET_ALL_POKEMONS } from "./action-types.js";
import axios from 'axios';



export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const allPokemons = await axios.get('http://localhost:3001/pokemons');
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload:allPokemons.data
            })
            
        } catch (error) {
        }
    }
    
  };


