import { useEffect, useState } from "react";
import { useHistory } from "react-router";

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

	return data.length > 0 ? <>
	<div> Nombre de clics : {props.compteur}</div>
	<div> Nombre de clics : {props.nomAppli}</div>
	<table>
		<thead>
			<tr>
				<th>Id</th>
				<th>Nom</th>
				<th>Version</th>
				<th>Etat</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
		{
		data.map(appli => <tr> 
            <td>{appli.id}</td>
            <td>{appli.nom}</td>
            <td>{appli.version}</td>
            <td>{appli.etat}</td>
            <td><button onClick = { () => {
                // attraper appli.id
                // faire Delete sur  http://localhost:8080/applications/appli.id
				fetch(`http://localhost:8080/applications/${appli.id}`, { method: 'DELETE'})
				.then(reponse => {
					if(reponse.status === 200) {
						// recharger le tableau 
						charger()
					}
				})
				.catch(e => console.log(e))
            }}>Supprimer</button></td>
        </tr>)
		}
		</tbody>
	</table>
	<button onClick={() => history.push('/formulaire')} >Créer une application</button>
	</>
    :<></>
}

export default Tableau