import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import MUIDataTable from "mui-datatables";
import { Button, ButtonGroup, Grid } from "@material-ui/core";

const Tableau = props => {								
	const [data, setData] = useState([])    

	const charger = () => {
		const headers = new Headers();
		headers.append("Content-Type", "application/json");
		fetch("http://localhost:8080/applications", { headers: headers })
			.then(reponse => {
				return reponse.json();
			})
			.then(reponse => setData(reponse))
			.catch(e => console.log(e));
	}

	useEffect(()=> {
		charger();
	}, [])

	const history = useHistory()
	const optionsTableau = {
		selectableRows : 'none'
	}
	const colonnes = [

		{
		 name: 'id',
		 label: 'Identifiant'	
		},
		{
		 name: 'nom',
		 label: "Nom de l'application"	
		},
		{
		 name: 'version',
		 label: "Version"	
		},
		{
		 name: 'etat',
		 label: "Etat"	
		},
		
		{
		 name: 'id',
		 label: ' ',
		 options: {
			 customBodyRender : (value, tableMeta, updateValue) => {
				 return <Button variant='outlined' color='secondary' onClick = { () => {
					fetch(`http://localhost:8080/applications/${value}`, { method: 'DELETE'})
					.then(reponse => {
						if(reponse.status === 200) {
							charger()
						}
					})
					.catch(e => console.log(e))
				}}>Supprimer</Button>
			 }
		 }
		}
	]

	return data.length > 0 ? <>
	<MUIDataTable title="Liste des applications" data={data} 
		columns={colonnes} options={optionsTableau}/>
	<ButtonGroup >
		<Button onClick={() => history.push('/formulaire')} >Créer une application</Button>

	</ButtonGroup>
		
	</>
    :<></>
}

export default Tableau