import { Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'

const validate = values => {
    const errors = {}
    if(!values.nom || values.nom.length<2) {
        errors.nom = "Le nom est trop court ou absent"
    }
    return errors

}
const FormulaireFormik = () => {

    const formik = useFormik({
        initialValues: {
            nom: 'appli test',
            version: '1.0.0',
            etat: 'ACTIVE'
        },
        validate,
        onSubmit: values => {
            enregistrer(values)
        }
    })

    const enregistrer = values => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        fetch("http://localhost:8080/applications",
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(values)
            })
            .then(reponse => {
                console.log(reponse)
            })
            .catch(e => console.log(e))
    }
    return <>

        <form onSubmit={formik.handleSubmit}>
            <Grid container style={{padding:'2em'}}>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                
                <Grid item>
                    <TextField {...formik.getFieldProps('nom')} error={formik.errors.nom} helperText={formik.errors.nom} label="Nom de l'application" />
                </Grid>

            <TextField {...formik.getFieldProps('version')} />
            <TextField {...formik.getFieldProps('etat')} />
            <FormControl fullWidth>
                <InputLabel id="etat" fullWidth>Etat de l'application</InputLabel>
                <Select labelId="etat" label="Etat de l'application" {...formik.getFieldProps('etat')}>
                    {["ACTIVE", "OBSOLETE"].map(etat => <MenuItem key={etat} value={etat}>{etat}</MenuItem>)}
                </Select>
            </FormControl>
            </Grid>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button type="submit"> Enregistrer</Button>
                </ButtonGroup>
            </Box>
        </form>
    </>
}

export default FormulaireFormik