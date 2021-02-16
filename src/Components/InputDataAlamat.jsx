import React from 'react';
import {
    Grid, MenuItem,FormControlLabel,
    TextField, Typography, Checkbox
} from '@material-ui/core';
import {
    getDataStatusRumah,
    saveDataAlamat
} from '../Actions/InputDataActions';
import {
    useSelector, useDispatch
} from 'react-redux';
import InputDataAlamatDaerah from './InputDataAlamatDaerah';

const InputDataAlamat = () => {
    const dataAlamatStore = useSelector(state => state.inputDataReducer.dataAlamat);
    const masterStatusRumahStore = useSelector(state => state.inputDataReducer.masterStatusRumah);

    const dispatch = useDispatch();

    const [alamatKtp, setAlamatKtp] = React.useState(dataAlamatStore.alamatKtp  ? dataAlamatStore.alamatKtp : '');
    const [provKtp, setProvKtp]     = React.useState(dataAlamatStore.provKtp    ? dataAlamatStore.provKtp : {});
    const [kabKtp, setKabKtp]       = React.useState(dataAlamatStore.kabKtp     ? dataAlamatStore.kabKtp : {});
    const [kecKtp, setKecKtp]       = React.useState(dataAlamatStore.kecKtp     ? dataAlamatStore.kecKtp : {});
    const [kelKtp, setKelKtp]       = React.useState(dataAlamatStore.kelKtp     ? dataAlamatStore.kelKtp : {});
    const [posKtp, setPosKtp]       = React.useState(dataAlamatStore.posKtp     ? dataAlamatStore.posKtp : '');
    const [statRumahKtp, setStatRumahKtp] = React.useState(dataAlamatStore.statRumahKtp ? dataAlamatStore.statRumahKtp : '');
    
    const [alamatDom, setAlamatDom] = React.useState(dataAlamatStore.alamatDom  ? dataAlamatStore.alamatDom : '');
    const [provDom, setProvDom]     = React.useState(dataAlamatStore.provDom    ? dataAlamatStore.provDom : {});
    const [kabDom, setKabDom]       = React.useState(dataAlamatStore.kabDom     ? dataAlamatStore.kabDom : {});
    const [kecDom, setKecDom]       = React.useState(dataAlamatStore.kecDom     ? dataAlamatStore.kecDom : {});
    const [kelDom, setKelDom]       = React.useState(dataAlamatStore.kelDom     ? dataAlamatStore.kelDom : {});
    const [posDom, setPosDom]       = React.useState(dataAlamatStore.posDom     ? dataAlamatStore.posDom : '');
    const [statRumahDom, setStatRumahDom] = React.useState(dataAlamatStore.statRumahDom ? dataAlamatStore.statRumahDom : '');

    const [checkSama, setCheckSama] = React.useState(false);

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'alamatKtp':
                setAlamatKtp(event.target.value);
                break;
            case 'alamatDom':
                setAlamatDom(event.target.value);
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
            case 'statRumahDom':
                setStatRumahDom(event.target.value);
                break;
            default:
                return;
        }
    }

    const handleCheck = (event) => {
        setCheckSama(event.target.checked)
    }

    React.useEffect(() => {
        if(checkSama){
            setAlamatDom(alamatKtp)
            setProvDom(provKtp)
            setKabDom(kabKtp)
            setKecDom(kecKtp)
            setKelDom(kelKtp)
            setPosDom(posKtp)
            setStatRumahDom(statRumahKtp)
        }
    },[checkSama,alamatKtp,provKtp,kabKtp,kecKtp,kelKtp,posKtp,statRumahKtp])

    // start kode pos ktp
    React.useEffect(() => {
        if(kelKtp !== null && kelKtp.id){
            (async () => {
                const kelIdEncoded = encodeURIComponent(kelKtp.id);
                const response = await fetch('https://api-pb.tuturcinatur.xyz/api/kodepos/search?kelurahan_id=' + kelIdEncoded , {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                        }
                    });
                const kodePos = await response.json();
                if(Array.isArray(kodePos)){
                    setPosKtp(kodePos[0].no_kodepos);
                }
            })(); 
        }
    },[kelKtp])

    // start kode pos domisili
    React.useEffect(() => {
        if(kelDom !== null && kelDom.id){
            (async () => {
                const kelIdEncoded = encodeURIComponent(kelDom.id);
                const response = await fetch('https://api-pb.tuturcinatur.xyz/api/kodepos/search?kelurahan_id=' + kelIdEncoded , {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                        }
                    });
                const kodePos = await response.json();
                if(Array.isArray(kodePos)){
                    setPosDom(kodePos[0].no_kodepos);
                }
            })(); 
        }
    },[kelDom])

    //  start status rumah ktp & domisili
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
            statRumahKtp: statRumahKtp,
            alamatDom   : alamatDom,
            provDom     : provDom,
            kabDom      : kabDom,
            kecDom      : kecDom,
            kelDom      : kelDom,
            posDom      : posDom,
            statRumahDom: statRumahDom
        }

        dispatch(saveDataAlamat(dataAlamat));
    }
    React.useEffect(() => { saveState(); },[alamatKtp,provKtp,kabKtp,kecKtp,kelKtp,posKtp,statRumahKtp,provDom,kabDom,kecDom,kelDom])
    
    const handleUpdateProvDom = (data) => {
        setProvDom(data);
    }

    const handleUpdateKabDom = (data) => {
        setKabDom(data);
    }
    
    const handleUpdateKecDom = (data) => {
        setKecDom(data);
    }
    
    const handleUpdateKelDom = (data) => {
        setKelDom(data);
    }

    const handleUpdateProvKtp = (data) => {
        setProvKtp(data);
    }

    const handleUpdateKabKtp = (data) => {
        setKabKtp(data);
    }
    
    const handleUpdateKecKtp = (data) => {
        setKecKtp(data);
    }
    
    const handleUpdateKelKtp = (data) => {
        setKelKtp(data);
    }


    return(
        <div>
            <form>
                <Grid container spacing={3}>
                    <Grid container item xs={12} lg={6} spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" color="initial">
                                Alamat Sesuai KTP
                            </Typography>
                        </Grid>
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
                            <InputDataAlamatDaerah 
                                id="provinsiKtp"
                                label="Provinsi"
                                onChange={handleUpdateProvKtp}
                                value={provKtp}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputDataAlamatDaerah 
                                id="kabupatenKtp"
                                label="Kabupaten"
                                onChange={handleUpdateKabKtp}
                                value={kabKtp}
                                provinsi={provKtp}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputDataAlamatDaerah 
                                id="kecamatanKtp"
                                label="Kecamatan"
                                onChange={handleUpdateKecKtp}
                                value={kecKtp}
                                kabupaten={kabKtp}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputDataAlamatDaerah 
                                id="kelurahanKtp"
                                label="Kelurahan"
                                onChange={handleUpdateKelKtp}
                                value={kelKtp}
                                kecamatan={kecKtp}
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
                            <Typography variant="h4" color="initial">
                                Alamat Domisili
                                <FormControlLabel
                                    label="Alamat Domisili sama dengan alamat KTP"
                                    control={
                                        <Checkbox 
                                            checked={checkSama} 
                                            onChange={handleCheck}
                                            name="checkSama"
                                            color="primary"
                                            />
                                    }
                                    />
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            id="alamatDom"
                            label="Alamat Rumah"
                            value={alamatDom}
                            onChange={handleInputChange}
                            fullWidth
                            multiline
                            rowsMax={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputDataAlamatDaerah 
                                id="provinsiDomisili"
                                label="Provinsi"
                                onChange={handleUpdateProvDom}
                                value={provDom}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputDataAlamatDaerah 
                                id="kabupatenDomisili"
                                label="Kabupaten"
                                onChange={handleUpdateKabDom}
                                value={kabDom}
                                provinsi={provDom}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputDataAlamatDaerah 
                                id="kecamatanDomisili"
                                label="Kecamatan"
                                onChange={handleUpdateKecDom}
                                value={kecDom}
                                kabupaten={kabDom}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputDataAlamatDaerah 
                                id="kelurahanDomisili"
                                label="Kelurahan"
                                onChange={handleUpdateKelDom}
                                value={kelDom}
                                kecamatan={kecDom}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField
                            id="posDom"
                            label="Kode Pos"
                            value={posDom}
                            onChange={handleInputChange}
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField
                            id="statRumahDom"
                            label="Status Rumah"
                            name="statRumahDom"
                            value={statRumahDom}
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
                </Grid>
            </form>
        </div>
    )
}

export default InputDataAlamat;