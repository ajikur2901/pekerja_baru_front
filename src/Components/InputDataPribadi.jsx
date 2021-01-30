import React, { useEffect,useState } from 'react';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import {
    FormControlLabel, Grid, Radio, MenuItem
} from '@material-ui/core';
import {
    useSelector, useDispatch
} from 'react-redux';
import {
    saveDataPribadi
} from '../Actions/InputDataActions';

const InputDataPribadi = () => {
    const dataPribadiStore = useSelector(state => state.inputDataReducer.dataPribadi);
    const dispatch = useDispatch();

    const [nik,setNIK]                  = useState(dataPribadiStore.nik ? dataPribadiStore.nik : '' );
    const [noKk,setNoKK]                = useState(dataPribadiStore.noKk ? dataPribadiStore.noKk : '' );
    const [noNpwp,setNoNPWP]            = useState(dataPribadiStore.noNpwp ? dataPribadiStore.noNpwp : '' );
    const [nama,setNama]                = useState(dataPribadiStore.nama ? dataPribadiStore.nama : '' );
    const [jenKel,setJenKel]            = useState(dataPribadiStore.jenKel ? dataPribadiStore.jenKel : '' );
    const [agama,setAgama]              = useState(dataPribadiStore.agama ? dataPribadiStore.agama : '' );
    const [nationality,setNationality]  = useState(dataPribadiStore.nationality ? dataPribadiStore.nationality : '' );
    const [tmpLahir,setTmpLahir]        = useState(dataPribadiStore.tmpLahir ? dataPribadiStore.tmpLahir : '' );
    const [tglLahir,setTglLahir]        = useState(dataPribadiStore.tglLahir ? dataPribadiStore.tglLahir : '2021-01-01');
    const [golDarah,setGolDarah]        = useState(dataPribadiStore.golDarah ? dataPribadiStore.golDarah : '');
    const [noHp,setNoHp]                = useState(dataPribadiStore.noHp ? dataPribadiStore.noHp : '');
    const [noTelepon,setNoTelepon]      = useState(dataPribadiStore.noTelepon ? dataPribadiStore.noTelepon : '');
    const [email,setEmail]              = useState(dataPribadiStore.email ? dataPribadiStore.email : '');
    const [statNikah,setStatNikah]      = useState(dataPribadiStore.statNikah ? dataPribadiStore.statNikah : '');
    const [tglNikah,setTglNikah]        = useState(dataPribadiStore.tglNikah ? dataPribadiStore.tglNikah : '2021-01-01');
    const [jmlAnak,setJmlAnak]          = useState(dataPribadiStore.jmlAnak ? dataPribadiStore.jmlAnak : '');

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'nik':
                setNIK(event.target.value);
                break;
            case 'noKk':
                setNoKK(event.target.value);
                break;
            case 'noNpwp':
                setNoNPWP(event.target.value);
                break;
            case 'nama':
                setNama(event.target.value);
                break;
            case 'tmpLahir':
                setTmpLahir(event.target.value);
                break;
            case 'tglLahir':
                setTglLahir(event.target.value);
                break;
            case 'noHp':
                setNoHp(event.target.value);
                break;
            case 'noTelepon':
                setNoTelepon(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'tglNikah':
                setTglNikah(event.target.value);
                break;
            case 'jmlAnak':
                setJmlAnak(event.target.value);
                break;
            default: 
                return;
        }
    }

    const handleSelectionChange = (event) => {
        switch(event.target.name){
            case 'jenKel':
                setJenKel(event.target.value);
                break;
            case 'nationality':
                setNationality(event.target.value);
                break;
            case 'statNikah':
                setStatNikah(event.target.value);
                break;
            case 'agama':
                setAgama(event.target.value);
                break;
            case 'golDarah':
                setGolDarah(event.target.value);
                break;
            default:
                return;
        }
    }

    const saveState = () => {
        let dataPribadi = {
            nik         : nik,
            noKk        : noKk,
            noNpwp      : noNpwp,
            nama        : nama,
            jenKel      : jenKel,
            agama       : agama,
            nationality : nationality,
            tmpLahir    : tmpLahir,
            tglLahir    : tglLahir,
            golDarah    : golDarah,
            noHp        : noHp,
            noTelepon   : noTelepon,
            email       : email,
            statNikah   : statNikah,
            tglNikah    : tglNikah,
            jmlAnak     : jmlAnak,
        }
        dispatch(saveDataPribadi(dataPribadi));
    }

    const dataAgama = [
        {
            agama: 'Islam'
        },
        {
            agama: 'Kristen'
        },
        {
            agama: 'Katholik'
        },
        {
            agama: 'Hindu'
        },
        {
            agama: 'Budha'
        },
        {
            agama: 'Konghuchu'
        },
    ]

    const dataGolDarah = [
        {
            gol_darah:'A'
        },
        {
            gol_darah:'B'
        },
        {
            gol_darah:'O'
        },
        {
            gol_darah:'AB'
        },
    ]

    useEffect(() => { saveState(); },[nik])
    useEffect(() => { saveState(); },[noKk])
    useEffect(() => { saveState(); },[noNpwp])
    useEffect(() => { saveState(); },[nama])
    useEffect(() => { saveState(); },[jenKel])
    useEffect(() => { saveState(); },[agama])
    useEffect(() => { saveState(); },[nationality])
    useEffect(() => { saveState(); },[tmpLahir])
    useEffect(() => { saveState(); },[tglLahir])
    useEffect(() => { saveState(); },[golDarah])
    useEffect(() => { saveState(); },[noHp])
    useEffect(() => { saveState(); },[noTelepon])
    useEffect(() => { saveState(); },[email])
    useEffect(() => { saveState(); },[statNikah])
    useEffect(() => { saveState(); },[tglNikah])
    useEffect(() => { saveState(); },[jmlAnak])

    return(
        <div>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="nik"
                        label="NIK"
                        value={nik}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="noKk"
                        label="No. KK"
                        value={noKk}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="noNpwp"
                        label="No. NPWP"
                        value={noNpwp}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="nama"
                        label="Nama Lengkap"
                        value={nama}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Jenis Kelamin</FormLabel>
                            <RadioGroup aria-label="Jenis Kelamin" name="jenKel" value={jenKel} onChange={handleSelectionChange} row>
                                <FormControlLabel value="Laki-Laki" control={<Radio/>} label="Laki-Laki" />
                                <FormControlLabel value="Perempuan" control={<Radio/>} label="Perempuan" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Kewarganegaraan</FormLabel>
                            <RadioGroup aria-label="Kewarganegaraan" name="nationality" value={nationality} onChange={handleSelectionChange} row>
                                <FormControlLabel value="WNI" control={<Radio/>} label="WNI" />
                                <FormControlLabel value="WNA" control={<Radio/>} label="WNA" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                        id="agama"
                        label="Agama"
                        name="agama"
                        value={agama}
                        onChange={handleSelectionChange}
                        fullWidth
                        select
                        >
                            {
                                dataAgama.map((option) => (
                                    <MenuItem key={option.agama} value={option.agama}>
                                        {option.agama}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                        id="golDarah"
                        label="Gol. Darah"
                        name="golDarah"
                        value={golDarah}
                        onChange={handleSelectionChange}
                        fullWidth
                        select
                        >
                            {
                                dataGolDarah.map((option) => (
                                    <MenuItem key={option.gol_darah} value={option.gol_darah}>
                                        {option.gol_darah}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <TextField
                        id="tmpLahir"
                        label="Tempat Lahir"
                        value={tmpLahir}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="tglLahir"
                        label="Tanggal Lahir"
                        value={tglLahir}
                        onChange={handleInputChange}
                        fullWidth
                        type="date"
                        />
                        
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="noHp"
                        label="No. Handphone"
                        value={noHp}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="noTelepon"
                        label="No. Telephone"
                        value={noTelepon}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="email"
                        label="Email"
                        value={email}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Status Pernikahan</FormLabel>
                            <RadioGroup aria-label="Status Pernikahan" name="statNikah" value={statNikah} onChange={handleSelectionChange} row>
                                <FormControlLabel value="Menikah" control={<Radio/>} label="Menikah" />
                                <FormControlLabel value="Belum Menikah" control={<Radio/>} label="Belum Menikah" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="tglNikah"
                        label="Tanggal Nikah"
                        value={tglNikah}
                        onChange={handleInputChange}
                        fullWidth
                        type="date"
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="jmlAnak"
                        label="Jumlah Anak"
                        value={jmlAnak}
                        onChange={handleInputChange}
                        fullWidth
                        type="number"
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}



export default InputDataPribadi;