import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
import Container from '@material-ui/core/Container';

const TableauDatagrid = ({compteur}) => {
    const [data, setData] = useState([])
    
    const charger = () => {
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch("http://localhost:8080/applications", {headers: headers})
        .then(reponse => reponse.json())
        .then(reponse => setData(reponse))
        .catch(e => console.log(e))
    }

    useEffect(() => {
        charger()
    }, [])
    // callback exécuté si seulement la valeur de la dépendance change
    // la dépendance peut être la vérifiée sur un champ d'un objet : [x.y]

    const supprimer = id => {
        fetch(`http://localhost:8080/applications/${id}`, {method: 'DELETE'})
        .then(reponse => charger())
        .catch(e => console.log(e))
    }   
    
    
        

    return data.length > 0 
    ? <Container>
        <div style={{ height: 400, width: '100%' }}>

    <DataGrid pageSize={5} 
    columns={[        
        {field:'nom', headerName: 'Nom', flex: 0.5}, 
        {field: 'version'}, 
        {field: 'etat'},
        {
            field: 'id',
            headerName: null,
            renderCell: params => (
                <span>
                    <button onClick={e => supprimer(params.value)} >Supprimer</button>
                </span>
            )
        }
    ]}
    
    rows = {
        data.map(appli =>  
            ({
                id: appli.id, 
                nom: appli.nom, 
                version: appli.version, 
                etat: appli.etat,
            })
            ) 
        }    
        />
        </div>
    <Link to={'formulaire'}><button>Saisir un formulaire</button></Link>
    <div>Il y a eu {compteur} enregistrements</div>   
    </Container>
    : <></>
}  
export default TableauDatagrid