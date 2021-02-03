import React from 'react';
import {
    Grid, FormControl, InputLabel, Select, MenuItem,
    TextField, CircularProgress
} from '@material-ui/core';
import {
    Autocomplete
} from '@material-ui/lab';

const InputDataAlamat = () => {
    const [alamatKtp, setAlamatKtp] = React.useState('');
    const [provKtp, setProvKtp]     = React.useState('');
    const [provIdKtp, setProvIdKtp] = React.useState('');
    const [kabKtp, setKabKtp]       = React.useState('');
    const [kabIdKtp, setKabIdKtp]   = React.useState('');
    const [kecKtp, setKecKtp]       = React.useState('');
    const [kecIdKtp, setKecIdKtp]   = React.useState('');
    const [kelKtp, setKelKtp]       = React.useState('');
    const [kelIdKtp, setKelIdKtp]   = React.useState('');
    const [posKtp, setPosKtp]       = React.useState('');
    const [statRumahKtp, setStatRumahKtp] = React.useState('');

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'alamatKtp':
                setAlamatKtp(event.target.value);
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

    // start provinsi ktp
    const [openProvKtp, setOpenProvKtp] = React.useState(false);
    const [optionsProvKtp, setOptionsProvKtp] = React.useState([]);
    const loadingProvKtp =  openProvKtp && optionsProvKtp.length === 0;

    React.useEffect(() => {
        let active = true;

        if(!loadingProvKtp){
            return undefined;
        }

        (async () => {
            const response = await fetch('https://api-pb.tuturcinatur.xyz/api/provinsi', {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
            const provinsi = await response.json();

            if(active){
                setOptionsProvKtp(provinsi);
            }
        })(); 

        return () => {
            active = false;
        }
    },[loadingProvKtp])

    React.useEffect(() => {
        if(!openProvKtp) {
            setOptionsProvKtp([]);
        }
    },[openProvKtp]);

    const handleInputProvKtpChange = (event,newValue) => {
        setProvKtp(newValue.nama_provinsi);
        setProvIdKtp(newValue.id)
    }

    // start kabupaten ktp
    const [openKabKtp, setOpenKabKtp] = React.useState(false);
    const [optionsKabKtp, setOptionsKabKtp] = React.useState([]);
    const loadingKabKtp =  openKabKtp && optionsKabKtp.length === 0;

    React.useEffect(() => {
        let active = true;

        if(!loadingKabKtp){
            return undefined;
        }

        (async () => {
            const provIdEncoded = encodeURIComponent(provIdKtp);
            const response = await fetch('https://api-pb.tuturcinatur.xyz/api/kabupaten/search?provinsi_id=' + provIdEncoded , {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
            const kabupaten = await response.json();

            if(active){
                setOptionsKabKtp(kabupaten);
            }
        })(); 

        return () => {
            active = false;
        }
    },[loadingKabKtp])

    React.useEffect(() => {
        if(!openKabKtp) {
            setOptionsKabKtp([]);
        }
    },[openKabKtp]);

    const handleInputKabKtpChange = (event,newValue) => {
        setKabKtp(newValue.nama_kabupaten);
        setKabIdKtp(newValue.id)
    }

    // start kecamatan ktp
    const [openKecKtp, setOpenKecKtp] = React.useState(false);
    const [optionsKecKtp, setOptionsKecKtp] = React.useState([]);
    const loadingKecKtp =  openKecKtp && optionsKecKtp.length === 0;

    React.useEffect(() => {
        let active = true;

        if(!loadingKecKtp){
            return undefined;
        }

        (async () => {
            const kabIdEncoded = encodeURIComponent(kabIdKtp);
            const response = await fetch('https://api-pb.tuturcinatur.xyz/api/kecamatan/search?kabupaten_id=' + kabIdEncoded , {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
            const kecamatan = await response.json();

            if(active){
                setOptionsKecKtp(kecamatan);
            }
        })(); 

        return () => {
            active = false;
        }
    },[loadingKecKtp])

    React.useEffect(() => {
        if(!openKecKtp) {
            setOptionsKecKtp([]);
        }
    },[openKecKtp]);

    const handleInputKecKtpChange = (event,newValue) => {
        setKecKtp(newValue.nama_kecammatan);
        setKecIdKtp(newValue.id)
    }

    // start kelurahan ktp
    const [openKelKtp, setOpenKelKtp] = React.useState(false);
    const [optionsKelKtp, setOptionsKelKtp] = React.useState([]);
    const loadingKelKtp =  openKelKtp && optionsKelKtp.length === 0;

    React.useEffect(() => {
        let active = true;

        if(!loadingKelKtp){
            return undefined;
        }

        (async () => {
            const kecIdEncoded = encodeURIComponent(kecIdKtp);
            const response = await fetch('https://api-pb.tuturcinatur.xyz/api/kelurahan/search?kecamatan_id=' + kecIdEncoded , {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
            const kelurahan = await response.json();

            if(active){
                setOptionsKelKtp(kelurahan);
            }
        })(); 

        return () => {
            active = false;
        }
    },[loadingKelKtp])

    React.useEffect(() => {
        if(!openKelKtp) {
            setOptionsKelKtp([]);
        }
    },[openKelKtp]);

    const handleInputKelKtpChange = (event,newValue) => {
        setKelKtp(newValue.nama_kelurahan);
        setKelIdKtp(newValue.id)
    }

    // start kode pos ktp
    React.useEffect(() => {
        if()
        (async () => {
            const kelIdEncoded = encodeURIComponent(kelIdKtp);
            const response = await fetch('https://api-pb.tuturcinatur.xyz/api/kelurahan/search?kelurahan_id=' + kelIdEncoded , {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
            const kodePos = await response.json();
            
            setPosKtp(kodePos);
        })(); 
    },[kelIdKtp])


    return(
        <div>
            <form>
                <Grid container spacing={3}>
                    <Grid container item xs={12} lg={6} spacing={3}>
                        <Grid item xs={12}>
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
                            <Autocomplete 
                                id="provKtp"
                                open={openProvKtp}
                                onOpen={() => {
                                    setOpenProvKtp(true)
                                }}
                                onClose={() => {
                                    setOpenProvKtp(false)
                                }}
                                getOptionSelected={(option,value) => option.id === value.id}
                                getOptionLabel={(option) => option.nama_provinsi}
                                options={optionsProvKtp}
                                loading={loadingProvKtp}
                                onChange={handleInputProvKtpChange}
                                renderInput={(params) => (
                                    <TextField
                                        { ...params}
                                        label="Provinsi"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <React.Fragment>
                                                    {loadingProvKtp ? <CircularProgress color="inherit" size={20} /> : null }
                                                    {params.InputProps.endAdornment}
                                                </React.Fragment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete 
                                id="kabKtp"
                                open={openKabKtp}
                                onOpen={() => {
                                    setOpenKabKtp(true)
                                }}
                                onClose={() => {
                                    setOpenKabKtp(false)
                                }}
                                getOptionSelected={(option,value) => option.id === value.id}
                                getOptionLabel={(option) => option.nama_kabupaten}
                                options={optionsKabKtp}
                                loading={loadingKabKtp}
                                onChange={handleInputKabKtpChange}
                                renderInput={(params) => (
                                    <TextField
                                        { ...params}
                                        label="Kabupaten / Kota"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <React.Fragment>
                                                    {loadingKabKtp ? <CircularProgress color="inherit" size={20} /> : null }
                                                    {params.InputProps.endAdornment}
                                                </React.Fragment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete 
                                id="kecKtp"
                                open={openKecKtp}
                                onOpen={() => {
                                    setOpenKecKtp(true)
                                }}
                                onClose={() => {
                                    setOpenKecKtp(false)
                                }}
                                getOptionSelected={(option,value) => option.id === value.id}
                                getOptionLabel={(option) => option.nama_kecamatan}
                                options={optionsKecKtp}
                                loading={loadingKecKtp}
                                onChange={handleInputKecKtpChange}
                                renderInput={(params) => (
                                    <TextField
                                        { ...params}
                                        label="Kecamatan"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <React.Fragment>
                                                    {loadingKecKtp ? <CircularProgress color="inherit" size={20} /> : null }
                                                    {params.InputProps.endAdornment}
                                                </React.Fragment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete 
                                id="kelKtp"
                                open={openKelKtp}
                                onOpen={() => {
                                    setOpenKelKtp(true)
                                }}
                                onClose={() => {
                                    setOpenKelKtp(false)
                                }}
                                getOptionSelected={(option,value) => option.id === value.id}
                                getOptionLabel={(option) => option.nama_kelurahan}
                                options={optionsKelKtp}
                                loading={loadingKelKtp}
                                onChange={handleInputKelKtpChange}
                                renderInput={(params) => (
                                    <TextField
                                        { ...params}
                                        label="Kelurahan"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <React.Fragment>
                                                    {loadingKelKtp ? <CircularProgress color="inherit" size={20} /> : null }
                                                    {params.InputProps.endAdornment}
                                                </React.Fragment>
                                            ),
                                        }}
                                    />
                                )}
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