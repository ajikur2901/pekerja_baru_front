import React from 'react';
import {
    Grid, FormControl, InputLabel, Select, MenuItem,
    TextField
} from '@material-ui/core';

const InputDataAlamat = () => {
    const [alamatKtp, setAlamatKtp] = React.useState('');
    const [provKtp, setProvKtp]     = React.useState('');
    const [kabKtp, setKabKtp]       = React.useState('');
    const [kecKtp, setKecKtp]       = React.useState('');
    const [desaKtp, setDesaKtp]     = React.useState('');
    const [posKtp, setPosKtp]       = React.useState('');
    const [statRumahKtp, setStatRumahKtp] = React.useState('');

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'alamatKtp':
                setAlamatKtp(event.target.value);
                break;
            case 'provKtp':
                setProvKtp(event.target.value);
                break;
            case 'kabKtp':
                setKabKtp(event.target.value);
                break;
            case 'kecKtp':
                setKecKtp(event.target.value);
                break;
            case 'desaKtp':
                setDesaKtp(event.target.value);
                break;
            case 'posKtp':
                setPosKtp(event.target.value);
                break;
            case 'statRumahKtp':
                setStatRumahKtp(event.target.value);
                break;
            default:
                return;
        }
    }
    return(
        <div>
            <form>
                <Grid container spacing={3}>
                    <Grid container item xs={12} lg={6} spacing={3}>
                        <Grid item xs={12} lg={4}>
                            <TextField
                            id="alamatKtp"
                            label="Alamat Rumah"
                            value={alamatKtp}
                            onChange={handleInputChange}
                            fullWidth
                            multiline
                            rowsMax={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel id="provKtpLabel">Provinsi</InputLabel>
                                <Select
                                    labelId="provKtpLabel"
                                    id="provKtp"
                                    value={provKtp}
                                    onChange={handleInputChange}
                                    autoWidth
                                >
                                    <MenuItem value="A">DI Yogyakarta</MenuItem>
                                    <MenuItem value="B">Jawa Tengah</MenuItem>
                                    <MenuItem value="O">Jawa Timur</MenuItem>
                                    <MenuItem value="AB">Jawa Barat</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel id="kabKtpLabel">Kabupaten / Kota</InputLabel>
                                <Select
                                    labelId="kabKtpLabel"
                                    id="kabKtp"
                                    value={kabKtp}
                                    onChange={handleInputChange}
                                    autoWidth
                                >
                                    <MenuItem value="A">Sleman</MenuItem>
                                    <MenuItem value="B">Semarang</MenuItem>
                                    <MenuItem value="O">Surabaya</MenuItem>
                                    <MenuItem value="AB">Bandung</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel id="kecKtpLabel">Kecamatan</InputLabel>
                                <Select
                                    labelId="kecKtpLabel"
                                    id="kecKtp"
                                    value={kecKtp}
                                    onChange={handleInputChange}
                                    autoWidth
                                >
                                    <MenuItem value="A">Godean</MenuItem>
                                    <MenuItem value="B">Tegalrejo</MenuItem>
                                    <MenuItem value="O">Mlati</MenuItem>
                                    <MenuItem value="AB">seyegan</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField
                            id="desaKtp"
                            label="Desa"
                            value={desaKtp}
                            onChange={handleInputChange}
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField
                            id="posKtp"
                            label="Kode Pos"
                            value={posKtp}
                            onChange={handleInputChange}
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel id="statRumahKtpLabel">Status Rumah</InputLabel>
                                <Select
                                    labelId="statRumahKtpLabel"
                                    id="statRumahKtp"
                                    value={statRumahKtp}
                                    onChange={handleInputChange}
                                    autoWidth
                                >
                                    <MenuItem value="A">Orang Tua</MenuItem>
                                    <MenuItem value="B">Kontrak</MenuItem>
                                    <MenuItem value="O">Kost</MenuItem>
                                    <MenuItem value="AB">Rumah Sendiri</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} lg={6} spacing={3}>
                        <Grid item xs={12}>
                            tes2
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default InputDataAlamat;