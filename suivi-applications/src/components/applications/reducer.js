import { MODIFIER_COMPTEUR } from "./actions";

export const applicationReducer = (state = 0, action) => {
	if(action.type === MODIFIER_COMPTEUR) {
		return state + action.payload
	}
	return state;
}