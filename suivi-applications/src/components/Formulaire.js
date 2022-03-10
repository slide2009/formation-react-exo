import { Button, ButtonGroup, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { default as MuiLink } from '@material-ui/core/Link'

const Formulaire = ({ incrementer, mettreAJour }) => {

    // const { state } = useLocation();
    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState("OBSOLETE")


    const enregistrer = () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        fetch("http://localhost:8080/applications",
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ nom: nom, version: version, etat: etat })
            })
            .then(reponse => {
                console.log(reponse)
                incrementer()
                mettreAJour(nom)
            })
            .catch(e => console.log(e))
    }

    return <>
        <form>
            <Container>
                <Paper elevation={2}>
                    <Grid container spacing={3} padding={2}>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="nom" label="Nom" onChange={e => setNom(e.target.value)} value={nom} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="version" label="Version" onChange={e => setVersion(e.target.value)} value={version} />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="etat" fullWidth>Etat de l'application</InputLabel>
                                <Select labelId="etat" label="Etat de l'application" value={etat} onChange={e => setEtat(e.target.value)}>
                                    {["ACTIVE", "OBSOLETE"].map(etat => <MenuItem key={etat} value={etat}>{etat}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} />
                        <Grid item />
                    </Grid>
                    <Box sx={{ alignItems: 'center', display: 'flex', padding: '2em' }}>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button onClick={e => { e.preventDefault(); enregistrer() }}> Enregistrer</Button>
                        </ButtonGroup>
                    </Box>
                </Paper>
                <Grid container>
                    <Grid item xs={4}>
                        <MuiLink underline='none'>
                            <Link to={'/tableau-redux'}>Retour vers le tableau redux</Link>
                        </MuiLink>
                    </Grid>
                    <Grid item>
                        <MuiLink underline='none'>
                            <Link to={'/tableau-datatables'}>Retour vers le tableau datatables</Link>
                        </MuiLink>
                    </Grid>
                </Grid>
            </Container>
        </form>

    </>
}

export default Formulaire