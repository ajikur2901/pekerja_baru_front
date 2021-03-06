import React from 'react';
import {
    useSelector, useDispatch
} from 'react-redux'
import {
    makeStyles
} from '@material-ui/core/styles';
import { 
    Grid, Accordion, 
    AccordionSummary, AccordionDetails, Typography, 
    Table, TableHead, TableBody, TableRow, TableCell,
    Button, TextField, Dialog, DialogActions, 
    DialogContent, DialogContentText, DialogTitle,
    CircularProgress
} from '@material-ui/core';
import {
    ExpandMore as ExpandMoreIcon
} from '@material-ui/icons'
import {
    getDataAgama,
    getDataHubunganKeluarga,
    getDataHubunganKerja,
    getDataStatusRumah
} from '../Actions/InputDataActions';
import {
    createAgama,                updateAgama,                deleteAgama,
    createHubunganKeluarga,     updateHubunganKeluarga,     deleteHubunganKeluarga,
    createHubunganKerja,        updateHubunganKerja,        deleteHubunganKerja,
    createStatusRumah,          updateStatusRumah,          deleteStatusRumah
} from '../Actions/SettingActions';

const useStyles = makeStyles((theme) => ({
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

const SettingMaster = (props) => {
    const masterStore = useSelector(state => {
        switch(props.id){
            case 'agama':
                return state.inputDataReducer.masterAgama
            case 'hubunganKerja':
                return state.inputDataReducer.masterHubunganKerja 
            case 'hubunganKeluarga':
                return state.inputDataReducer.masterHubunganKeluarga 
            case 'statusRumah':
                return state.inputDataReducer.masterStatusRumah 
            default: return;
        }
    });
    const errorStore = useSelector(state => state.errorReducer.master);
    const [error,setError] = React.useState(errorStore.isError ? errorStore.isError : false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [newValue, setNewValue] = React.useState('');
    const [dialogLabel, setDialogLabel] = React.useState('');
    const [mode, setMode] = React.useState('');
    const [idData, setIdData] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [errorJson, setErrorJson] = React.useState(errorStore.errorData ? errorStore.errorData : {});

    const handleChange = (name) => (event, isExpanded) => {
        setExpanded(isExpanded ? name : false);
    }

    React.useEffect(() => {
        if(loading === true && errorStore.isError === true){
            setLoading(false);
            setErrorJson(errorStore.errorData);
        }else{
            setOpen(false);
            setErrorJson({})
        }
        setError(errorStore.isError ? errorStore.isError : false)
    }, [errorStore.errorTime])

    const handleModalOpen = (data)=> (event) => {
        setOpen(true);
        setLoading(false);
        if(data === false){
            setIdData(0);
            setNewValue('');
            setDialogLabel(`Form untuk menambahkan ${props.label}`)
        }else{
            switch(props.id){
                case 'agama':
                    setNewValue(data.agama)
                    break
                case 'hubunganKerja':
                    setNewValue(data.hubungan) 
                    break
                case 'hubunganKeluarga':
                    setNewValue(data.hubungan) 
                    break
                case 'statusRumah':
                    setNewValue(data.status)
                    break
                default: 
                    setNewValue('');
            }
            setIdData(data.id)
            setDialogLabel(`Form untuk memperbarui ${props.label}`)
        }
    }

    const handleDelete = () => {
        if(idData > 0){
            switch(props.id){
                case 'agama':
                    dispatch(deleteAgama(idData))
                    break
                case 'hubunganKerja':
                    dispatch(deleteHubunganKerja(idData));
                    break
                case 'hubunganKeluarga':
                    dispatch(deleteHubunganKeluarga(idData));
                    break
                case 'statusRumah':
                    dispatch(deleteStatusRumah(idData));
                    break
                default: return;
            }
        }
        setLoading(true);
    }

    const handleValueChange = (event) => {
        setNewValue(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSave = () => {
        if (idData === 0) {
            switch(props.id){
                case 'agama':
                    dispatch(createAgama(newValue));
                    break
                case 'hubunganKerja':
                    dispatch(createHubunganKerja(newValue));
                    break
                case 'hubunganKeluarga':
                    dispatch(createHubunganKeluarga(newValue));
                    break
                case 'statusRumah':
                    dispatch(createStatusRumah(newValue));
                    break
                default: return;
            }    
        }else{
            switch(props.id){
                case 'agama':
                    dispatch(updateAgama(newValue,idData))
                    break
                case 'hubunganKerja':
                    dispatch(updateHubunganKerja(newValue,idData));
                    break
                case 'hubunganKeluarga':
                    dispatch(updateHubunganKeluarga(newValue,idData));
                    break
                case 'statusRumah':
                    dispatch(updateStatusRumah(newValue,idData));
                    break
                default: return;
            }
        }
        setLoading(true);
    }

    const dataMaster = masterStore || [];
    React.useEffect(
        () => { 
            if (dataMaster.length === 0 || open === false) {
                switch(props.id){
                    case 'agama':
                        dispatch(getDataAgama()) 
                        break
                    case 'hubunganKerja':
                        dispatch(getDataHubunganKerja()) 
                        break
                    case 'hubunganKeluarga':
                        dispatch(getDataHubunganKeluarga()) 
                        break
                    case 'statusRumah':
                        dispatch(getDataStatusRumah()) 
                        break
                    default: return;
                }
            }
        },[open]
    );
    return(
        <Accordion expanded={expanded === props.id} onChange={handleChange(props.id)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={props.id} id={props.id}>
                <Typography variant="h5">{props.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="contained" onClick={handleModalOpen(false)} className={classes.btnAdd}>
                                        Tambah
                                    </Button>
                                    <Dialog open={open} onClose={handleClose} aria-labeledby="data" fullWidth>
                                        <DialogTitle>{props.label}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                {dialogLabel}
                                            </DialogContentText>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12}>
                                                    <TextField 
                                                        id="value"
                                                        label={props.label}
                                                        value={newValue}
                                                        onChange={handleValueChange}
                                                        fullWidth
                                                        autoComplete="off"
                                                        noValidate 
                                                    />
                                                </Grid>
                                            </Grid>
                                            <DialogContentText>
                                                {Object.keys(errorJson).map((key) => {
                                                    return (
                                                        <div style={{color: 'red'}}>{errorJson[key]}</div>
                                                    )
                                                })}
                                            </DialogContentText>
                                            <DialogActions>
                                                <div className={loading === false ? 'text-center' : 'hidden'}>
                                                    <Button variant="contained" onClick={handleSave} className={classes.btnAdd}>
                                                        Simpan
                                                    </Button>
                                                </div>
                                                <div className={loading === true ? 'text-center' : 'hidden'}>
                                                    <CircularProgress/>
                                                </div>
                                                <div className={idData > 0 && loading === false ? 'text-center' : 'hidden'}>
                                                    <Button 
                                                        variant="contained" 
                                                        className={classes.btnDelete} 
                                                        onClick={handleDelete}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </DialogActions>
                                        </DialogContent>
                                    </Dialog>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>No</TableCell>
                                    <TableCell>{props.label}</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    dataMaster.map((value,index) => {
                                        return(
                                        <TableRow key={value.id}>
                                            <TableCell>{index+1}</TableCell>
                                            <TableCell>
                                                {
                                                    (() => {
                                                        switch(props.id){
                                                            case 'agama':
                                                                return value.agama
                                                            case 'hubunganKerja':
                                                                return value.hubungan 
                                                            case 'hubunganKeluarga':
                                                                return value.hubungan 
                                                            case 'statusRumah':
                                                                return value.status
                                                            default: 
                                                                return ''
                                                        }
                                                    })()
                                                }
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="contained" className={classes.btnEdit} onClick={handleModalOpen(value)}>Edit</Button>
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
    )
}

export default SettingMaster