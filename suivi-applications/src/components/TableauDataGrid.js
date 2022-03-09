import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

const TableauDataGrid = () => {

    const [data, setData] = useState([])

    const charger = () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("http://localhost:8080/applications", { headers: headers })
            .then(reponse => reponse.json())
            .then(reponse => setData(reponse))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        charger();
    }, [])

    return <TableContainer component={Paper}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Version</TableCell>
                    <TableCell>Etat</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(appli => {
                    return <TableRow>
                        <TableCell>{appli.id}</TableCell>
                        <TableCell>{appli.nom}</TableCell>
                        <TableCell>{appli.version}</TableCell>
                        <TableCell>{appli.etat}</TableCell>
                        <TableCell>
                            <Button>Supprimer</Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>

}

export default TableauDataGrid