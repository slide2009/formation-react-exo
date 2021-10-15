import {ECRIRE_MESSAGE, ECRIRE_NOM, MODIFIER_COMPTEUR} from './actions'
export const applicationReducer = (state = { compteur : 0, message: '', nom:''}, action) => {
    switch(action.type) {
        case MODIFIER_COMPTEUR:
            return {
                ...state, 
                compteur: state.compteur + action.payload
            }
        case ECRIRE_MESSAGE:    
            return {
                ...state, 
                message:  action.payload
            }
        case ECRIRE_NOM:    
            return {
                ...state, 
                nom:  action.payload
            }
        default:
            return state;

    }
    
}