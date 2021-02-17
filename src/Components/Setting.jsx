import React from 'react';
import {
    useSelector, useDispatch
} from 'react-redux'
import {
    makeStyles
} from '@material-ui/core/styles';
import { 
    CssBaseline, Toolbar, Paper, Grid, Accordion, 
    AccordionSummary, AccordionDetails, Typography, 
    Table, TableHead, TableBody, TableRow, TableCell,
    Button, TextField
} from '@material-ui/core';
import {
    ExpandMore as ExpandMoreIcon
} from '@material-ui/icons'
import Navigation from './Navigation';
import {
    getDataAgama,
    getDataHubunganKeluarga,
    getDataHubunganKerja,
    getDataStatusRumah
} from '../Actions/InputDataActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    btnEdit: {
        backgroundColor: '#3B82F6', 
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#1D4ED8', 
        }
    },
    btnDelete: {
        backgroundColor: '#EF4444', 
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#B91C1C', 
        }
    },
    btnAdd: {
        backgroundColor: '#10B981', 
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#047857', 
        }
    }
}))
const SettingPage = () => {
    const masterAgamaStore = useSelector(state => state.inputDataReducer.masterAgama);
    const masterHubunganKeluargaStore = useSelector(state => state.inputDataReducer.masterHubunganKeluarga);
    const masterHubunganKerjaStore = useSelector(state => state.inputDataReducer.masterHubunganKerja);
    const masterStatusRumahStore = useSelector(state => state.inputDataReducer.masterStatusRumah);
    const dispatch = useDispatch();

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [showAgamaAddForm, setShowAgamaAddForm] = React.useState(false);
    const [agama, setAgama] = React.useState('');
    
    const handleChange = (name) => (event, isExpanded) => {
        setExpanded(isExpanded ? name : false);
    }

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'agama': 
                setAgama(event.target.value)
                break;
            default: return;
        }
    }

    const handleAgamaAddClick = () => {
        setShowAgamaAddForm(!showAgamaAddForm);
    }

    const dataAgama = masterAgamaStore || [];
    React.useEffect(() => { if (dataAgama.length === 0) dispatch(getDataAgama()) },[]);
    const dataHubunganKerja = masterHubunganKerjaStore || [];
    React.useEffect(() => { if (dataHubunganKerja.length === 0) dispatch(getDataHubunganKerja()) },[]);
    const dataHubunganKeluarga = masterHubunganKeluargaStore || [];
    React.useEffect(() => { if (dataHubunganKeluarga.length === 0) dispatch(getDataHubunganKeluarga()) },[]);
    const dataStatusRumah = masterStatusRumahStore || [];
    React.useEffect(() => { if (dataStatusRumah.length === 0) dispatch(getDataStatusRumah()) },[]);

    return(
        <div className={classes.root}>
            <Navigation />
            <CssBaseline>
                <div className={classes.content}>
                    <Toolbar />
                    <Paper elevation={3} style={{padding: '10px', backgroundColor: '#E5E7EB'}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6}>
                                <Accordion expanded={expanded === 'agama'} onChange={handleChange('agama')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="agama" id="agama">
                                        <Typography variant="h5">Agama</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <form>
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={12} md={8}>
                                                            <TextField
                                                                id="agama"
                                                                label="Agama"
                                                                value={agama}
                                                                onChange={handleInputChange}
                                                                fullWidth
                                                                autoComplete="off"
                                                                noValidate
                                                                disabled={!showAgamaAddForm}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <Button variant="contained" onClick={handleAgamaAddClick} className={classes.btnAdd}>
                                                                {showAgamaAddForm ? 'Simpan' : 'Tambah'}
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>No</TableCell>
                                                            <TableCell>Agama</TableCell>
                                                            <TableCell>Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {
                                                            dataAgama.map((value,index) => {
                                                                return(
                                                                <TableRow key={value.id}>
                                                                    <TableCell>{index+1}</TableCell>
                                                                    <TableCell>
                                                                        {value.agama}
                                                                        <TextField
                                                                            name="agamaNama"
                                                                            label="Agama"
                                                                            value={value.agama}
                                                                            // onChange={handleInputChange}
                                                                            fullWidth
                                                                            autoComplete="off"
                                                                            noValidate
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Button variant="contained" className={classes.btnEdit}>Edit</Button>
                                                                        <Button variant="contained" className={classes.btnDelete}>Delete</Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                                )
                                                            })
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Accordion expanded={expanded === 'hubKeluarga'} onChange={handleChange('hubKeluarga')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="h5">Hubungan Keluarga</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>No</TableCell>
                                                    <TableCell>Hubungan Keluarga</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    dataHubunganKeluarga.map((value,index) => {
                                                        return(
                                                        <TableRow key={value.id}>
                                                            <TableCell>{index+1}</TableCell>
                                                            <TableCell>{value.hubungan}</TableCell>
                                                            <TableCell>
                                                                <Button variant="contained" className={classes.btnEdit}>Edit</Button>
                                                                <Button variant="contained" className={classes.btnDelete}>Delete</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Accordion expanded={expanded === 'hubKerja'} onChange={handleChange('hubKerja')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="h5">Hubungan Kerja</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>No</TableCell>
                                                    <TableCell>Hubungan Kerja</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    dataHubunganKerja.map((value,index) => {
                                                        return(
                                                        <TableRow key={value.id}>
                                                            <TableCell>{index+1}</TableCell>
                                                            <TableCell>{value.hubungan}</TableCell>
                                                            <TableCell>
                                                                <Button variant="contained" className={classes.btnEdit}>Edit</Button>
                                                                <Button variant="contained" className={classes.btnDelete}>Delete</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Accordion expanded={expanded === 'statRumah'} onChange={handleChange('statRumah')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="h5">Status Rumah</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>No</TableCell>
                                                    <TableCell>Status Rumah</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    dataStatusRumah.map((value,index) => {
                                                        return(
                                                        <TableRow key={value.id}>
                                                            <TableCell>{index+1}</TableCell>
                                                            <TableCell>{value.status}</TableCell>
                                                            <TableCell>
                                                                <Button variant="contained" className={classes.btnEdit}>Edit</Button>
                                                                <Button variant="contained" className={classes.btnDelete}>Delete</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </CssBaseline>
        </div>
    )
}

export default SettingPage;