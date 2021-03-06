import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import { 
    CssBaseline, Toolbar, Paper, Grid, Table, TableHead, TableCell, TableBody, TableRow, Button
} from '@material-ui/core';
import Navigation from './Navigation';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}))

const User = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navigation />
            <CssBaseline>
                <div className={classes.content}>
                    <Toolbar />
                    <Paper elevation={3} style={{padding: '10px'}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Button variant="contained">Tambah</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">No.</TableCell>
                                            <TableCell align="center">Nama</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center">1.</TableCell>
                                            <TableCell>Aji Kurniawan</TableCell>
                                            <TableCell>pekerja1@gmail.com</TableCell>
                                            <TableCell align="center">
                                                <Button variant="contained" color="primary">Edit</Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </CssBaseline>
        </div>
    )
}

export default User