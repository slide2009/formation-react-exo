import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { FormHelperText } from '@material-ui/core';


const validate = values => {
	const errors = {};
	if ( !values.etat ) { 
		errors.etat = "L'état doit être rempli"
	}
    if(!values.nom || (values.nom && values.nom.length<3)) {
        errors.nom = "Le nom doit être rempli et de longueur > 2"
    }
	return errors;
}

const Formulaire = ({ajouter}) => {
    const ACTIVE = 'ACTIVE'
    const [message, setMessage] = useState('');

    const formik = useFormik({
        initialValues: { 
            nom: 'Appli Toto', 
            version: '0.1.1',
            etat: null
        }, 
        validate,
        onSubmit: values => {
            const headers = new Headers();
            headers.append("Content-Type" , "application/json")
            fetch("http://localhost:8080/applications",
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(values)
                })
            .then(reponse => {
                setMessage('Enregistré')
                ajouter(1)
            })
            .catch(e => setMessage('Problème'))
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div>{message}</div>
            </Grid>
            <Grid item xs={12}>
                <TextField {...formik.getFieldProps('nom')} label="Nom" error={formik.errors.nom} helperText={formik.errors.nom}/> 
            </Grid>
            <Grid item xs={12}>
                <TextField {...formik.getFieldProps('version')} label="Version"/>
            </Grid>
            <Grid item xs={12} spacing={5}>
                <FormControl error={formik.errors.etat}>
                    <InputLabel>Etat</InputLabel>
                    <Select {...formik.getFieldProps('etat')}>
                        <MenuItem>--</MenuItem>
                        <MenuItem value={ACTIVE}>Active</MenuItem>
                        <MenuItem value="OBSOLETE">Obsolète</MenuItem>
                    </Select>
                    {formik.errors.etat && <FormHelperText>{formik.errors.etat}</FormHelperText>}
                </FormControl>
            </Grid>
            
            <Grid container justify="center" fixed>
                <Grid xs={2}>
                    <Button type='submit' variant="outlined" color='primary'>Enregistrer</Button>
                </Grid>
                <Grid xs={2}> 
                    <Link to={'tableau'} component={Button} variant="outlined" color='secondary'>Tableau des applications</Link>
                </Grid>
            </Grid>
        </Grid>

    </form>

}

export default Formulaire