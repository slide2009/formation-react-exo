import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Button, Container, MenuItem, Select, TextField } from "@material-ui/core";

const Formulaire = ({ajouter, enregistrerNom}) => {

    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState("OBSOLETE")

    const selectionnerEtat = e => setEtat(e.target.value)
    
    const enregistrer = e => {
        e.preventDefault();
        ajouter(1)
        enregistrerNom(nom)
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch("http://localhost:8080/applications",
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({nom: nom, version: version, etat: etat})
            })
        .then(reponse => console.log(reponse))
        .catch(e => console.log(e))
    }

    return <form>
        <Container maxWidth='md'>
        <Grid container spacing={4}>
            <Grid item md={12}> 

                Création d'une application
            </Grid>
            <Grid item xs={6} md={12}>
                <TextField label="Nom" variant='outlined' onChange = {e => {setNom(e.target.value)}} value={nom}/> 
            </Grid>
            <Grid item xs={6}  md={12}>
                <TextField label="Version" variant='outlined' onChange = {e => {setVersion(e.target.value)}} value={version}/> 
            </Grid>
            <Grid item md={12}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={etat}
                        onChange={selectionnerEtat}
                    >
                        <MenuItem value='ACTIVE'>ACTIVE</MenuItem>
                        <MenuItem value='OBSOLETE'>OBSOLETE</MenuItem>
                    </Select>
            </Grid>

            <Grid container alignContent='center'>
                <Grid item>
                    <Button color="primary" variant='outlined' onClick = { enregistrer}>Enregistrer</Button>
                </Grid>
                <Grid item>

                    <Link to='/tableau' color="secondary" component={Button}>Retour au tableau</Link>
                </Grid>
            </Grid>
        </Grid>
        </Container>
    </form>
}

export default Formulaire