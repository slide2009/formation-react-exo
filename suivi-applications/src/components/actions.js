export const MODIFIER_COMPTEUR = "MODIFIER_COMPTEUR"
export const modifierCompteur = payload => ({type : MODIFIER_COMPTEUR, payload: payload })
export const ECRIRE_MESSAGE = "ECRIRE_MESSAGE"
export const ecrireMessage = payload => ({type : ECRIRE_MESSAGE, payload: payload })
export const ECRIRE_NOM = "ECRIRE_NOM"
export const ecrireNom = payload => ({type : ECRIRE_NOM, payload: payload })