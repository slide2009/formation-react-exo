import { MODIFIER_COMPTEUR } from "./actions";

const stateInitial = {
	compteur : 0
}
export const applicationReducer = (state = stateInitial, action) => {
	if(action.type === MODIFIER_COMPTEUR) {
		// return state + action.payload
		return {...state, compteur : state.compteur + action.payload}
	}
	return state;
}