import Formulaire from "./Formulaire"
import Tableau from "./Tableau"

const Dashboard = ({nomApplication}) => {
    
    return <>
        <Formulaire/>
        <Tableau/>
        Nom de la dernière application enregistrée : {nomApplication}
    </>
}

export default Dashboard