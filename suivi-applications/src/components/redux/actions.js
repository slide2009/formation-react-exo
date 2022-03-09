export const MODIFIER_COMPTEUR = "MODIFIER_COMPTEUR"
export const MAJ_NOM_APPLI = "MAJ_NOM_APPLI"
export const modifierCompteur = () => ({type : MODIFIER_COMPTEUR })
export const majNomAppli = payload => ({type : MAJ_NOM_APPLI, payload })