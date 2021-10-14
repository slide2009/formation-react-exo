import {MODIFIER_COMPTEUR} from './actions'
export const applicationReducer = (state = { compteur : 0}, action) => {
    if(action.type === MODIFIER_COMPTEUR) {
        return {
            ...state, 
            compteur: state.compteur + action.payload
        }
    }
    return state;
}