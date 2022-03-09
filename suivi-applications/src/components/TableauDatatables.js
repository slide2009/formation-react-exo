import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MUIDataTable from "mui-datatables"
import { Button, Chip } from "@mui/material";
import CustomFilterList from "./CustomFilterList";

const TableauDatatables = ({compteur}) => {								
	const [data, setData] = useState([])    

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
	}, [])
    
    const supprimer = idApplication => {
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch(`http://localhost:8080/applications/${idApplication}`, 
            {headers: headers,
            method: 'DELETE'})
        .then(reponse => charger())
        .catch(e => console.log(e))
        
    }

    const navigate = useNavigate();

    const colonnes = [
        {
            name: 'id',
            label: 'Identifiant',
            options : {
                display: 'none',
                filter: true,
                sort: false
            }
        },
        {
            name: 'nom',
            label: 'Nom',
            options: {
                customBodyRender : (value, tableMeta, updateValue) => {
                    return <Chip label={value}></Chip>
                }
            }
        },
        {
            name: 'version',
            label: 'Version'
        },
        {
            name: 'etat',
            label: 'Etat'
        },
        {
            name: '',
            options: {
                customBodyRender : (value, tableMeta, updateValue) => {
                    return <Button onClick={e => supprimer(tableMeta.rowData[0])}>Supprimer</Button>
                }
            }
        }
    ]

    const optionsTableau = {

    }

	return data.length > 0 
    ? <div>
        <MUIDataTable data={data} columns={colonnes}/>
        
        <button onClick={() =>  navigate('/formulaire-redux', {
                                    state: { nomAppli : 'Appli qui vient du tableau'}
                                })}>
             Afficher formulaire
        </button>
        <div>
            Il y a eu {compteur} enregistrements
        </div>
    </div> 
    
	:<></>
}

export default TableauDatatables