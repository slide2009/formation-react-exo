import { useEffect, useState } from "react";

const Tableau = () => {								
	const [data, setData] = useState([])    

    const [estSupprime, setEstSupprime] = useState(false)

    const charger = () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("http://localhost:8080/applications", { headers: headers })
            .then(reponse => reponse.json())
            .then(reponse => setData(reponse))
            .catch(e => console.log(e));
    }
	useEffect(()=> {
		charger();
	}, [estSupprime])
    
    const supprimer = idApplication => {
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch(`http://localhost:8080/applications/${idApplication}`, 
            {headers: headers,
            method: 'DELETE'})
        .then(reponse => setEstSupprime(estSupprime => !estSupprime))
        .catch(e => console.log(e))
        
    }

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
             <td>{appli.version}</td>
             <td>{appli.etat}</td>
             <td>
                 <button onClick={e => {
                     // suppression
                     supprimer(appli.id)
                 }}>Supprimer</button>
             </td>
         </tr>)
		}
		</tbody>
	</table>
	:<></>
}

export default Tableau