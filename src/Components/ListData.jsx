import React from 'react';
import {
    Paper,Typography,Divider,
    Table, TableRow, TableCell,TableHead,TableBody
} from '@material-ui/core'

const ListData = () => {
    return(
        <Paper elevation={3}>
            <Typography variant="h3">
                List Data
            </Typography>
            <Divider />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Created at</TableCell>
                        <TableCell>Updated at</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Aji Kurniawan</TableCell>
                        <TableCell>aji@gmail.com</TableCell>
                        <TableCell>1 Februari 2021 16:00:04</TableCell>
                        <TableCell>1 Februari 2021 18:40:24</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default ListData;