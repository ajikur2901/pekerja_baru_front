import React from 'react';
import {
    Grid, Paper, Table, TableContainer, TableHead, TableCell, TableRow,TableBody, Button
} from '@material-ui/core';
import InputKeluargaBaru from './InputKeluargaBaru';
import {
    useDispatch,useSelector
} from 'react-redux';
import {
    EditSharp
} from '@material-ui/icons';
import {
    saveInputKeluargaBaru
} from '../Actions/InputDataActions';

const InputDataKeluarga = () => {
    const dataKeluargaStore = useSelector(state => state.inputDataReducer.dataKeluarga);
    const dispatch = useDispatch();

    const [rows,setRows] = React.useState([]);

    const createData = (nama,alamat,hubKel,tglLahir,ditanggung,statMenikah,openDialogTime) => {
        let row = {nama,alamat,hubKel,tglLahir,ditanggung,statMenikah,openDialogTime}
        setRows((oldArray) => [...oldArray,row])
    }

    React.useEffect(()=>{
        setRows([]);
        dataKeluargaStore.forEach((anggota) => {
            createData(
                anggota.nama,
                anggota.alamat,
                anggota.hubKeluarga,
                anggota.tglLahir,
                anggota.statDitanggung,
                anggota.statNikah,
                anggota.openDialogTime
            )
        })
    },[dataKeluargaStore])

    const saveState = (data) => {
        let anggotaKeluarga = {
            nama            : data.nama,
            alamat          : data.alamat,
            hubKeluarga     : data.hubKel,
            tglLahir        : data.tglLahir,
            statDitanggung  : data.ditanggung,
            statNikah       : data.statMenikah,
            openDialogTime  : data.openDialogTime
        }
        dispatch(saveInputKeluargaBaru(anggotaKeluarga));
    }

    const handleEditData = (data) => {
        saveState(data);
    }

    return(
        <div>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <InputKeluargaBaru />
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer component={Paper} >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No</TableCell>
                                        <TableCell>Nama</TableCell>
                                        <TableCell>Alamat</TableCell>
                                        <TableCell>Jenis Anggota</TableCell>
                                        <TableCell>Tanggal Lahir</TableCell>
                                        <TableCell>Ditanggung</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rows.map((row,index) => (
                                            <TableRow key={index}>
                                                <TableCell>{index}</TableCell>
                                                <TableCell>{row.nama}</TableCell>
                                                <TableCell>{row.alamat}</TableCell>
                                                <TableCell>{row.hubKel}</TableCell>
                                                <TableCell>{row.tglLahir}</TableCell>
                                                <TableCell>{row.ditanggung === "1" ? 'Ya' : 'Tidak'}</TableCell>
                                                <TableCell>{row.statMenikah === "1" ? 'Menikah' : 'Belum Menikah'}</TableCell>
                                                <TableCell>
                                                    <Button variant="contained" color="primary" onClick={() => {handleEditData(row)} } ><EditSharp /></Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default InputDataKeluarga;