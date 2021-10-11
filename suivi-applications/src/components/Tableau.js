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
			</tr>
		</thead>
		<tbody>
		{
		
		}
		</tbody>
	</table>
    :<></>
}

export default Tableau