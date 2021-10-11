import { useEffect, useState } from "react";

const Tableau = () => {								
	const [data, setData] = useState([])    

	useEffect(()=> {
		const headers = new Headers();
		headers.append("Content-Type" , "application/json")
		fetch("http://localhost:8080/applications", {headers: headers})
		.then(reponse => reponse.json())
		.then(reponse => setData(reponse))
		.catch(e => console.log(e))
	}, [])

	return data.length > 0 ? <table>
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
            <td>{appli.etat}</td>
            <td>{appli.version}</td>
            <td><button onClick = { () => {
                // attraper appli.id
                // faire Delete sur  http://localhost:8080/applications/appli.id

            }}>Supprimer</button></td>
        </tr>)
		}
		</tbody>
	</table>
    :<></>
}

export default Tableau