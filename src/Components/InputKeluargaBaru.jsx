import React, { useEffect } from 'react';
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,TextField,
    FormControl, FormLabel,RadioGroup,FormControlLabel, Radio, MenuItem
} from '@material-ui/core';
import {
    PersonAdd
} from '@material-ui/icons';
import {
    saveDataKeluarga,
    getDataHubunganKeluarga
} from '../Actions/InputDataActions';
import {
    useDispatch,useSelector
} from 'react-redux';

const InputKeluargaBaru = () => {
    const masterHubunganKeluargaStore   = useSelector(state => state.inputDataReducer.masterHubunganKeluarga);
    const inputKeluargaBaruStore        = useSelector(state => state.inputDataReducer.inputKeluargaBaru);

    const dispatch = useDispatch();

    const [addKeluarga, setAddKeluarga] = React.useState(true);
    const [open, setOpen]               = React.useState(false);
    const [nama, setNama]               = React.useState('');
    const [alamat, setAlamat]           = React.useState('');
    const [hubKeluarga, setHubKeluarga] = React.useState('');
    const [tglLahir, setTglLahir]       = React.useState('2000-01-01');
    const [statDitanggung, setStatDitanggung] = React.useState('');
    const [statNikah, setStatNikah]     = React.useState('');
    const openDialogTime = addKeluarga ? Math.floor(Date.now() / 1000) : inputKeluargaBaruStore.openDialogTime

    const handleClickOpen = () => {
        setOpen(true);
        setAddKeluarga(true);
        handleReset();
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleReset = () => {
        setNama('');
        setAlamat('');
        setHubKeluarga('');
        setTglLahir('2000-01-01');
        setStatDitanggung('');
        setStatNikah('');
    }
    
    const handleLoad = () => {
        setNama(inputKeluargaBaruStore.nama);
        setAlamat(inputKeluargaBaruStore.alamat);
        setHubKeluarga(inputKeluargaBaruStore.hubKeluarga);
        setTglLahir(inputKeluargaBaruStore.tglLahir);
        setStatDitanggung(inputKeluargaBaruStore.statDitanggung);
        setStatNikah(inputKeluargaBaruStore.statNikah);
    }

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'nama':
                setNama(event.target.value);
                break;
            case 'alamat':
                setAlamat(event.target.value);
                break;
            case 'tglLahir':
                setTglLahir(event.target.value);
                break;
            default: return;
        }
    }

    const handleSelectionChange = (event) => {
        switch(event.target.name) {
            case 'statDitanggung':
                setStatDitanggung(event.target.value);
                break;
            case 'statNikah':
                setStatNikah(event.target.value);
                break;
            case 'hubKeluarga':
                setHubKeluarga(event.target.value);
                break;
            default: return;
        }
    }

    const dataHubunganKeluarga = masterHubunganKeluargaStore || [];
    useEffect(() => { if(dataHubunganKeluarga.length === 0){ dispatch(getDataHubunganKeluarga()) }},[]);

    const saveState = (action) => {
        let keluargaBaru = {
            nama: nama,
            alamat: alamat,
            hubKeluarga: hubKeluarga,
            tglLahir: tglLahir,
            statDitanggung: statDitanggung,
            statNikah: statNikah,
            openDialogTime: openDialogTime
        }

        dispatch(saveDataKeluarga(keluargaBaru,action));
    }

    const handleSave = () => {
        saveState('save');
        setOpen(false);
    }

    const handleDelete = () => {
        saveState('delete');
        setOpen(false);
    }

    const handleUpdate = () => {
        saveState('update');
        setOpen(false);
    }

    useEffect(() => {
        if(Object.keys(inputKeluargaBaruStore).length > 0 && inputKeluargaBaruStore.constructor === Object){
            setOpen(true);
            handleLoad();
            setAddKeluarga(false);
        }
        
    },[inputKeluargaBaruStore])

    return(
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Tambah 
                <PersonAdd /> 
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="tambah keluarga" fullWidth>
                <DialogTitle>Tambah Anggota Keluarga</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        form untuk menambahkan data keluarga
                    </DialogContentText>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                            id="nama"
                            label="Nama Lengkap"
                            value={nama}
                            onChange={handleInputChange}
                            fullWidth
                            autoComplete="off"
                            noValidate
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            id="alamat"
                            label="Alamat Rumah"
                            value={alamat}
                            onChange={handleInputChange}
                            fullWidth
                            multiline
                            rowsMax={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            id="hubKeluarga"
                            label="Jenis Anggota"
                            name="hubKeluarga"
                            value={hubKeluarga}
                            onChange={handleSelectionChange}
                            fullWidth
                            select
                            >
                                {
                                    dataHubunganKeluarga.map((option) => (
                                        <MenuItem key={option.hubungan} value={option.hubungan}>
                                            {option.hubungan}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            id="tglLahir"
                            label="Tanggal Lahir"
                            value={tglLahir}
                            onChange={handleInputChange}
                            fullWidth
                            type="date"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Ditanggung</FormLabel>
                                <RadioGroup aria-label="Ditanggung" name="statDitanggung" value={statDitanggung} onChange={handleSelectionChange} row>
                                    <FormControlLabel value="1" control={<Radio/>} label="Ya" />
                                    <FormControlLabel value="0" control={<Radio/>} label="Tidak" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Status Pernikahan</FormLabel>
                                <RadioGroup aria-label="Status Pernikahan" name="statNikah" value={statNikah} onChange={handleSelectionChange} row>
                                    <FormControlLabel value="1" control={<Radio/>} label="Menikah" />
                                    <FormControlLabel value="0" control={<Radio/>} label="Belum Menikah" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="default">
                        Cancel
                    </Button>
                    <Button onClick={addKeluarga ? handleReset : handleDelete} variant="contained" color="secondary">
                        {addKeluarga ? 'Reset' : 'Delete'}
                    </Button>
                    <Button onClick={addKeluarga ? handleSave : handleUpdate} variant="contained" color="primary">
                        {addKeluarga ? 'Save' : 'Update'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputKeluargaBaru;