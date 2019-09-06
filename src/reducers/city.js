import {SET_CITY} from './../actions';

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return {...state, city: action.payload}    
            // si state tiene una propiedad city, cambiala por action.payload
            //payload es como el value, action.payload devuelve la city a cambiar
        default:
            return state;
        }
} 