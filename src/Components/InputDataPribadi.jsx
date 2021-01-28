import React from 'react';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import {
    FormControlLabel, Grid, Radio, Select, MenuItem,InputLabel
} from '@material-ui/core';


const InputDataPribadi = () => {
    const [nik,setNIK]                  = React.useState('');
    const [noKk,setNoKK]                = React.useState('');
    const [noNpwp,setNoNPWP]            = React.useState('');
    const [nama,setNama]                = React.useState('');
    const [jenKel,setJenKel]            = React.useState('');
    const [agama,setAgama]              = React.useState('');
    const [nationality,setNationality]  = React.useState('');
    const [tmpLahir,setTmpLahir]        = React.useState('');
    const [tglLahir,setTglLahir]        = React.useState('');
    const [golDarah,setGolDarah]        = React.useState('');
    const [noHp,setNoHp]                = React.useState('');
    const [noTelepon,setNoTelepon]      = React.useState('');
    const [email,setEmail]              = React.useState('');
    const [statNikah,setStatNikah]      = React.useState('');
    const [tglNikah,setTglNikah]        = React.useState('');
    const [jmlAnak,setJmlAnak]          = React.useState('');

    const handleInputChange = (event) => {
        console.log(event);
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
            case 'agama':
                setAgama(event.target.value);
                break;
            case 'tmpLahir':
                setTmpLahir(event.target.value);
                break;
            case 'tglLahir':
                setTglLahir(event.target.value);
                break;
            case 'golDarah':
                setGolDarah(event.target.value);
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

    const handleRadioChange = (event) => {
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
            default:
                return;
        }
    }

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
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Jenis Kelamin</FormLabel>
                            <RadioGroup aria-label="Jenis Kelamin" name="jenKel" value={jenKel} onChange={handleRadioChange} row>
                                <FormControlLabel value="Laki-Laki" control={<Radio/>} label="Laki-Laki" />
                                <FormControlLabel value="Perempuan" control={<Radio/>} label="Perempuan" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="agama"
                        label="Agama"
                        value={agama}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Kewarganegaraan</FormLabel>
                            <RadioGroup aria-label="Kewarganegaraan" name="nationality" value={nationality} onChange={handleRadioChange} row>
                                <FormControlLabel value="WNI" control={<Radio/>} label="WNI" />
                                <FormControlLabel value="WNA" control={<Radio/>} label="WNA" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="tmpLahir"
                        label="Tempat Lahir"
                        value={tmpLahir}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="tglLahir"
                        label="Tanggal Lahir"
                        value={tglLahir}
                        onChange={handleInputChange}
                        fullWidth
                        />
                        
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <InputLabel id="golDarahLabel">Gol. Darah</InputLabel>
                            <Select
                                labelId="golDarahLabel"
                                id="golDarah"
                                value={golDarah}
                                onChange={handleInputChange}
                                autoWidth
                            >
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="O">O</MenuItem>
                                <MenuItem value="AB">AB</MenuItem>
                            </Select>
                        </FormControl>
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
                            <RadioGroup aria-label="Status Pernikahan" name="statNikah" value={statNikah} onChange={handleRadioChange} row>
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
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="jmlAnak"
                        label="Jumlah Anak"
                        value={jmlAnak}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default InputDataPribadi;