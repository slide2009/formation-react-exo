import React, { useEffect, useState } from 'react'

const Tableau = () => {
    const [data, setData] = useState([])
    const [message, setMessage] = useState('initial')

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        fetch("http://localhost:8080/applications", { headers: headers })
            .then(reponse => reponse.json())
            .then(reponse => setData(reponse))
            .catch(e => console.log(e))
    }, [message])



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
                data.map(appli =>  {
                return (
                <tr key={appli.id}>
                    <td>{appli.id}</td>
                    <td>{appli.nom}</td>
                    <td>{appli.version}</td>
                    <td>{appli.etat}</td>
                </tr>
                )
                })
            }
        </tbody>
    </table>
        : <></>
}  
export default Tableau