export const MODIFIER_COMPTEUR = "MODIFIER_COMPTEUR"
export const modifierCompteur = payload => {
    console.log(payload)
    return {type : MODIFIER_COMPTEUR, payload };
}