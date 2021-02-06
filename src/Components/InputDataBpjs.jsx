import React from 'react';
import { 
    Grid, TextField, FormControl, FormLabel, RadioGroup,
    FormControlLabel, Radio, Select, InputLabel, MenuItem 
} from '@material-ui/core';
import {
    useSelector, useDispatch
} from 'react-redux';


const InputDataBpjs = () => {
    const dataPribadiStore  = useSelector(state => state.inputDataReducer.dataPribadi);
    const dataAlamatStore   = useSelector(state => state.inputDataReducer.dataAlamat);
    const dataKeluargaStore = useSelector(state => state.inputDataReducer.dataKeluarga);

    // from Data Pribadi
    const [nama,setNama]                = React.useState(dataPribadiStore.nama      ? dataPribadiStore.nama : '');
    const [tmpLahir,setTmpLahir]        = React.useState(dataPribadiStore.tmpLahir  ? dataPribadiStore.tmpLahir : '');
    const [tglLahir,setTglLahir]        = React.useState(dataPribadiStore.tglLahir  ? dataPribadiStore.tglLahir : '2021-01-01');
    const [jenKel,setJenKel]            = React.useState(dataPribadiStore.jenKel    ? dataPribadiStore.jenKel : '');
    const [noHp,setnoHp]                = React.useState(dataPribadiStore.noHp      ? dataPribadiStore.noHp : '');
    const [email,setEmail]              = React.useState(dataPribadiStore.email     ? dataPribadiStore.email : '');
    const [noNpwp,setNoNPWP]            = React.useState(dataPribadiStore.noNpwp    ? dataPribadiStore.noNpwp : '');

    // form data alamat domisili
    const [alamatDom, setAlamatDomisili]= React.useState(dataAlamatStore.alamatDom              ? dataAlamatStore.alamatDom : '');
    const [provDom, setProvDomisili]    = React.useState(dataAlamatStore.provDom.nama_provinsi  ? dataAlamatStore.provDom.nama_provinsi : '');
    const [kabDom, setKabDomisili]      = React.useState(dataAlamatStore.kabDom.nama_kabupaten  ? dataAlamatStore.kabDom.nama_kabupaten : '');
    const [posDom, setPosDomisili]      = React.useState(dataAlamatStore.posDom                 ? dataAlamatStore.posDom : '');

    // from data keluarga
    
    // input
    const [instansi, setInstansi]       = React.useState('');
    const [peserta, setPeserta]         = React.useState('');
    const [noPeserta, setNoPeserta]     = React.useState('');
    const [statPegawai, setStatPegawai] = React.useState('');
    const [fasKes, setFaskes]           = React.useState('');
    const [ibuKandung,setIbuKandung]    = React.useState('');
    
    //cari ibu kandung
    const findIbuKandung = (data) => {
        return data.filter((value) => {
            if(value.hubKeluarga === 'ibu kandung') return value;
        })
    }
    

    React.useEffect(() => {
        let ibu = findIbuKandung(dataKeluargaStore);
        setIbuKandung(ibu[0].nama);
        console.log(ibu);
    },[])

    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'instansi':
                setInstansi(event.target.value);
                break;
            case 'noPeserta':
                setNoPeserta(event.target.value);
                break;
            case 'fasKes':
                setFaskes(event.target.value);
                break;
            default:
                return;
        }
    }

    const handleSelectionChange = (event) => {
        switch(event.target.name){
            case 'peserta':
                setPeserta(event.target.value);
                break;
            case 'statPegawai':
                setStatPegawai(event.target.value);
                break;
            default:
                return;
        }
    }

    const dataStatusPegawai = [
        {
            status: 'Tetap',
        },
        {
            status: 'Kontrak',
        },
        {
            status: 'Paruh Waktu',
        },
    ]

    return(
        <div>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                          id="instansi"
                          label="Nama Badan Usaha/Instansi/Asosiasi"
                          value={instansi}
                          onChange={handleInputChange}
                          fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Apakah sebelumnya sudah menjadi peserta ?</FormLabel>
                            <RadioGroup aria-label="peserta" name="peserta" value={peserta} onChange={handleSelectionChange} row>
                                <FormControlLabel value="Belum" control={<Radio/>} label="Belum" />
                                <FormControlLabel value="Sudah" control={<Radio/>} label="Sudah" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                          id="noPeserta"
                          label="Bila sudah, mohon lengkapi nomor referensi (nomor peserta) BPJS ketenagakerjaan"
                          value={noPeserta}
                          onChange={handleInputChange}
                          fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="nama"
                        label="Nama Lengkap Tenaga Kerja"
                        value={nama}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <TextField
                        id="tmpLahir"
                        label="Tempat Lahir"
                        value={tmpLahir}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="tglLahir"
                        label="Tanggal Lahir"
                        value={tglLahir}
                        // onChange={handleInputChange}
                        fullWidth
                        type="date"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="jenKel"
                        label="Jenis Kelamin"
                        value={jenKel}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="ibuKandung"
                        label="Nama Lengkap Ibu Kandung Tenaga Kerja"
                        value={ibuKandung}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField
                        id="alamatDom"
                        label="Alamat Lengkap Tenaga Kerja"
                        value={alamatDom}
                        // onChange={handleInputChange}
                        fullWidth
                        multiline
                        rowsMax={4}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="posDom"
                        label="Kode Pos"
                        value={posDom}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="kabDom"
                        label="Kabupaten / Kota"
                        value={kabDom}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="provDom"
                        label="Provinsi"
                        value={provDom}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="noHp"
                        label="No. Telephone \ Handphone"
                        value={noHp}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="email"
                        label="Alamat Email"
                        value={email}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="noNpwp"
                        label="Nomor Pokok Wajib Pajak (NPWP)"
                        value={noNpwp}
                        // onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                        id="statPegawai"
                        label="Status Pegawai"
                        name="statPegawai"
                        value={statPegawai}
                        onChange={handleSelectionChange}
                        fullWidth
                        select
                        >
                            {
                                dataStatusPegawai.map((option) => (
                                    <MenuItem key={option.status} value={option.status}>
                                        {option.status}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        id="fasKes"
                        label="Kelas Rawat dan Faskes (Tingkat 1)"
                        value={fasKes}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                </Grid>
            </form>
            <div className="w-full p-4">
                <div className="formGroup hidden md:block">
                    *Untuk kode Faskes dapat diakses dan lihat pada laman&nbsp;
                    <a 
                        className="text-blue-600 hover:text-purple-500"
                        href="https://faskes.bpjs-kesehatan.go.id/aplicares/#/app/pnama/bylocation" 
                        target="_blank"
                        rel="noreferrer">
                            https://faskes.bpjs-kesehatan.go.id/aplicares/#/app/pnama/bylocation
                        </a>
                </div>
                <div className="formGroup block md:hidden">
                    *Untuk melihat kode Faskes &nbsp;
                    <a 
                        className="text-blue-600 hover:text-purple-500"
                        href="https://faskes.bpjs-kesehatan.go.id/aplicares/#/app/pnama/bylocation" 
                        target="_blank"
                        rel="noreferrer">
                            klik disini!
                        </a>
                </div>
            </div>
        </div>
    )
}

export default InputDataBpjs;