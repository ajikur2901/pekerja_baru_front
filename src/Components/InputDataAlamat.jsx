import React from 'react';
import {
    Grid, MenuItem,
    TextField, CircularProgress
} from '@material-ui/core';
import {
    Autocomplete
} from '@material-ui/lab';
import {
    getDataStatusRumah,
    saveDataAlamat
} from '../Actions/InputDataActions';
import {
    useSelector, useDispatch
} from 'react-redux';


const InputDataAlamat = () => {
    const dataAlamatStore = useSelector(state => state.inputDataReducer.dataAlamat);
    const masterStatusRumahStore = useSelector(state => state.inputDataReducer.masterStatusRumah);

    const dispatch = useDispatch();

    const [alamatKtp, setAlamatKtp] = React.useState(dataAlamatStore.alamatKtp  ? dataAlamatStore.alamatKtp : '');
    const [provKtp, setProvKtp]     = React.useState(dataAlamatStore.provKtp    ? dataAlamatStore.provKtp : {});
    const [provIdKtp, setProvIdKtp] = React.useState(dataAlamatStore.provKtp    ? dataAlamatStore.provKtp.id : '');
    const [kabKtp, setKabKtp]       = React.useState(dataAlamatStore.kabKtp     ? dataAlamatStore.kabKtp : {});
    const [kabIdKtp, setKabIdKtp]   = React.useState(dataAlamatStore.kabKtp     ? dataAlamatStore.kabKtp.id : '');
    const [kecKtp, setKecKtp]       = React.useState(dataAlamatStore.kecKtp     ? dataAlamatStore.kecKtp : {});
    const [kecIdKtp, setKecIdKtp]   = React.useState(dataAlamatStore.kecKtp     ? dataAlamatStore.kecKtp.id : '');
    const [kelKtp, setKelKtp]       = React.useState(dataAlamatStore.kelKtp     ? dataAlamatStore.kelKtp : {});
    const [kelIdKtp, setKelIdKtp]   = React.useState(dataAlamatStore.kelKtp     ? dataAlamatStore.kelKtp.id : '');
    const [posKtp, setPosKtp]       = React.useState(dataAlamatStore.posKtp     ? dataAlamatStore.posKtp : '');
    const [statRumahKtp, setStatRumahKtp] = React.useState(dataAlamatStore.statRumahKtp ? dataAlamatStore.statRumahKtp : '');

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'alamatKtp':
                setAlamatKtp(event.target.value);
                break;
            default:
                return;
        }
    }

    const handleSelectionChange = (event) => {
        switch(event.target.name){
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
        setProvKtp(newValue);
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
        setKabKtp(newValue);
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
        setKecKtp(newValue);
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
        setKelKtp(newValue);
        setKelIdKtp(newValue.id)
    }

    // start kode pos ktp
    React.useEffect(() => {
        if(kelIdKtp !== ''){
            (async () => {
                const kelIdEncoded = encodeURIComponent(kelIdKtp);
                const response = await fetch('https://api-pb.tuturcinatur.xyz/api/kodepos/search?kelurahan_id=' + kelIdEncoded , {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                const kodePos = await response.json();
                if(Array.isArray(kodePos)){
                    setPosKtp(kodePos[0].no_kodepos);
                }
            })(); 
        }
    },[kelIdKtp])

    //  start status rumah
    const dataStatusRumah = masterStatusRumahStore || [];
    React.useEffect(() => { if (dataStatusRumah.length === 0){ dispatch(getDataStatusRumah()) } },[])

    // save data
    const saveState = () => {
        let dataAlamat = {
            alamatKtp   : alamatKtp,
            provKtp     : provKtp,
            kabKtp      : kabKtp,
            kecKtp      : kecKtp,
            kelKtp      : kelKtp,
            posKtp      : posKtp,
            statRumahKtp: statRumahKtp
        }

        dispatch(saveDataAlamat(dataAlamat));
    }
    React.useEffect(() => { saveState(); },[alamatKtp])
    React.useEffect(() => { saveState(); },[provKtp])
    React.useEffect(() => { saveState(); },[kabKtp])
    React.useEffect(() => { saveState(); },[kecKtp])
    React.useEffect(() => { saveState(); },[kelKtp])
    React.useEffect(() => { saveState(); },[posKtp])
    React.useEffect(() => { saveState(); },[statRumahKtp])

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
                                getOptionLabel={(option) => option.nama_provinsi ? option.nama_provinsi : ''}
                                options={optionsProvKtp}
                                loading={loadingProvKtp}
                                value={provKtp}
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
                                getOptionLabel={(option) => option.nama_kabupaten ? option.nama_kabupaten : ''}
                                options={optionsKabKtp}
                                loading={loadingKabKtp}
                                value={kabKtp}
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
                                getOptionLabel={(option) => option.nama_kecamatan ? option.nama_kecamatan : ''}
                                options={optionsKecKtp}
                                loading={loadingKecKtp}
                                value={kecKtp}
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
                                getOptionLabel={(option) => option.nama_kelurahan ? option.nama_kelurahan : ''}
                                options={optionsKelKtp}
                                loading={loadingKelKtp}
                                value={kelKtp}
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
                        <Grid item xs={12} lg={6}>
                            <TextField
                            id="statRumahKtp"
                            label="Status Rumah"
                            name="statRumahKtp"
                            value={statRumahKtp}
                            onChange={handleSelectionChange}
                            fullWidth
                            select
                            >
                                {
                                    dataStatusRumah.map((option) => (
                                        <MenuItem key={option.status} value={option.status}>
                                            {option.status}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
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