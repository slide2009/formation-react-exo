import { MAJ_NOM_APPLI, MODIFIER_COMPTEUR } from "./actions";

export const applicationReducer = (state = {compteur : 0, nomAppli : ''}, action) => {
	if(action.type === MODIFIER_COMPTEUR) {
		return {
            ...state,
            compteur : state.compteur + 1
        }
    }
    
	else if(action.type === MAJ_NOM_APPLI) {
		return {
            ...state,
            nomAppli : action.payload
        }
    }
    
	return state;
}