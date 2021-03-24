import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'

const Tableau = ({ compteur }) => {
    const [data, setData] = useState([])

    const charger = () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        fetch("http://localhost:8080/applications", { headers: headers })
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
        fetch(`http://localhost:8080/applications/${id}`, { method: 'DELETE' })
            .then(reponse => charger())
            .catch(e => console.log(e))
    }

    const colonnes = [
        {
            name: 'id',
            label: "Id"
        },
        {
            name: "nom",
            label: "Nom"
        },
        {
            name: "version",
            label: "Version"
        },
        {
            name: "etat",
            label: "Etat"
        },
        {
            name: "id",
            label: ' ',            
            options: {
                customBodyRender: (value, tableMeta, updateValue) => <Button variant='outlined' color='secondary' onClick={e => supprimer(value)} >Supprimer {tableMeta.rowData[1]}</Button>
                
            }
        },
    ]

    const optionsTableau = {
        enableNestedDataAccess: '.'
    }


    return data.length &&
        <div>
            <MUIDataTable options={optionsTableau} columns={colonnes} data={data} />
            <Link to={'formulaire'}>
                <Button variant='outlined' color='primary'>Créer une application</Button>
            </Link>
            <div>Il y a eu {compteur} enregistrements</div>
        </div>

}
export default Tableau