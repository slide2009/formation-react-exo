import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Formulaire = ({ajouter}) => {
    const [nom, setNom] = useState('');
    const [version, setVersion] = useState('');
    const [etat, setEtat] = useState('ACTIVE');
    const [message, setMessage] = useState('');
    
    const enregistrer = e => {
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch("http://localhost:8080/applications",
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({nom: nom, version: version, etat: etat})
            })
        .then(reponse => {
            setMessage('Enregistré')
            ajouter(1)
        })
        .catch(e => setMessage('Problème'))           
    }

    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div>{message}</div>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Nom" onChange= {e => setNom(e.target.value)}/>                
            </Grid>
            <Grid item xs={12}>
                <TextField label="Version" onChange= { e => setVersion(e.target.value)}/>
            </Grid>
            <Grid item xs={12} spacing={5}>
                <FormControl>
                    <InputLabel>Etat</InputLabel>
                    <Select onChange={e => setEtat(e.target.value) } value={etat}>
                        <MenuItem value="ACTIVE">Active</MenuItem>
                        <MenuItem value="OBSOLETE">Obsolète</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            
            <Grid container justify="center" fixed>
                <Grid xs={2}>
                    <Button onClick = {enregistrer} spacing={3} variant="outlined" color='primary'>Enregistrer</Button>
                </Grid>
                <Grid xs={2}> 
                    <Link to={'tableau'} component={Button} variant="outlined" color='secondary'>Tableau des applications</Link>
                </Grid>
            </Grid>
        </Grid>

    </form>

}

export default Formulaire