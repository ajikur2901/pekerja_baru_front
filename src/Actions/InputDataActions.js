// action creator

const setDataPribadi            = (payload) => ({type: "SET_DATA_PRIBADI", payload});
const setMasterAgama            = (payload) => ({type: "SET_MASTER_AGAMA", payload});
const setMasterHubunganKeluarga = (payload) => ({type: "SET_MASTER_HUBUNGAN_KELUARGA", payload});
const setMasterHubunganKerja    = (payload) => ({type: "SET_MASTER_HUBUNGAN_KERJA", payload});
const setMasterStatusRumah      = (payload) => ({type: "SET_MASTER_STATUS_RUMAH", payload});
const setDataAlamat             = (payload) => ({type: "SET_DATA_ALAMAT", payload});
const setDataKeluarga           = (payload) => ({type: "SET_DATA_KELUARGA", payload});
const updateDataKeluarga        = (payload) => ({type: "UPDATE_DATA_KELUARGA", payload});
const deleteDataKeluarga        = (payload) => ({type: "DELETE_DATA_KELUARGA", payload});
const setInputKeluargaBaru      = (payload) => ({type: "SET_INPUT_KELUARGA_BARU", payload});
const setDataBpjs               = (payload) => ({type: "SET_DATA_BPJS", payload})
// methods

export const saveDataPribadi = (data) => dispatch => {
    dispatch(setDataPribadi(data));
}

export const saveDataAlamat = (data) => dispatch => {
    dispatch(setDataAlamat(data));
}

export const saveInputKeluargaBaru = (data) => dispatch => {
    dispatch(setInputKeluargaBaru(data));
}

export const saveDataKeluarga = (data,action) => dispatch => {
    switch(action){
        case 'save':
            dispatch(setDataKeluarga(data))
            break
        case 'update':
            dispatch(updateDataKeluarga(data))
            break
        case 'delete':
            dispatch(deleteDataKeluarga(data))
            break
        default: return;
    }
}

export const saveDataBpjs = (data) => dispatch => {
    dispatch(setDataBpjs(data));
}

export const getDataAgama = () => dispatch => {

    fetch('https://api-pb.tuturcinatur.xyz/api/agama', {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(
        (data) => {
            if(!data.hasOwnProperty('error')){
                dispatch(setMasterAgama(data));
            }
        },
        (error) => {
            console.log(error)
        }
    )
}

export const getDataHubunganKeluarga = () => dispatch => {

    fetch('https://api-pb.tuturcinatur.xyz/api/hubungan_keluarga', {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(
        (data) => {
            if(!data.hasOwnProperty('error')){
                dispatch(setMasterHubunganKeluarga(data));
            }
        },
        (error) => {
            console.log(error)
        }
    )
}

export const getDataHubunganKerja = () => dispatch => {

    fetch('https://api-pb.tuturcinatur.xyz/api/hubungan_kerja', {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(
        (data) => {
            if(!data.hasOwnProperty('error')){
                dispatch(setMasterHubunganKerja(data));
            }
        },
        (error) => {
            console.log(error)
        }
    )
}

export const getDataStatusRumah = () => dispatch => {

    fetch('https://api-pb.tuturcinatur.xyz/api/status_rumah', {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(
        (data) => {
            if(!data.hasOwnProperty('error')){
                dispatch(setMasterStatusRumah(data));
            }
        },
        (error) => {
            console.log(error)
        }
    )
}

const sendDataAlamat = (data,id) => {
    let dataFormKtp = new FormData();
    dataFormKtp.append('id_pekerja', id)
    dataFormKtp.append('alamat', data.alamatKtp)
    dataFormKtp.append('provinsi', data.provKtp.nama_provinsi)
    dataFormKtp.append('kabupaten', data.kabKtp.nama_kabupaten)
    dataFormKtp.append('kecamatan', data.kecKtp.nama_kecamatan)
    dataFormKtp.append('desa', data.kelKtp.nama_kelurahan)
    dataFormKtp.append('kode_pos', data.posKtp)
    dataFormKtp.append('status_rumah', data.statRumahKtp)
    fetch('https://api-pb.tuturcinatur.xyz/api/dataAlamatRumah/simpan', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: dataFormKtp
    })
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
        },
        (error) => {
            console.log(error)
        }
    )

    let dataFormDom = new FormData();
    dataFormDom.append('id_pekerja',id)
    dataFormDom.append('alamat', data.alamatDom)
    dataFormDom.append('provinsi', data.provDom.nama_provinsi)
    dataFormDom.append('kabupaten', data.kabDom.nama_kabupaten)
    dataFormDom.append('kecamatan', data.kecDom.nama_kecamatan)
    dataFormDom.append('desa', data.kelDom.nama_kelurahan)
    dataFormDom.append('kode_pos', data.posDom)
    dataFormDom.append('status_rumah', data.statRumahDom)
    fetch('https://api-pb.tuturcinatur.xyz/api/dataAlamatDomisili/simpan', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: dataFormDom
    })
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
        },
        (error) => {
            console.log(error)
        }
    )
}

const sendDataKeluarga = (data,id) => {
    data.map(value => {
        let dataForm = new FormData();
        dataForm.append('id_pekerja', id)
        dataForm.append('nama', value.nama )
        dataForm.append('hubungan_keluarga', value.hubKeluarga )
        dataForm.append('tanggal_lahir', value.tglLahir )
        dataForm.append('ditanggung', value.statDitanggung )
        dataForm.append('status_nikah', value.statNikah )
        dataForm.append('alamat', value.alamat )
        fetch('https://api-pb.tuturcinatur.xyz/api/dataKeluarga/simpan', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: dataForm
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error)
            }
        )
    })
}

const sendDataBpjs = (data,id) => {
    let dataForm = new FormData();
    dataForm.append('id_pekerja', id)
    dataForm.append('nama_instansi', data.instansi)
    dataForm.append('sebelumnya_peserta', data.peserta)
    dataForm.append('no_peserta', data.noPeserta)
    dataForm.append('hubungan_kerja', data.statPegawai)
    dataForm.append('fasilitas_kesehatan_1', data.faskes)
    fetch('https://api-pb.tuturcinatur.xyz/api/dataBpjs/simpan', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: dataForm
    })
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
        },
        (error) => {
            console.log(error)
        }
    )
}

export const  saveInputData = (data) => dispatch => {
    console.log(data);
    let dataForm = new FormData();
    let idPribadi = 0;
    dataForm.append('nik',data.dataPribadi.nik);
    dataForm.append('no_kk',data.dataPribadi.noKk);
    dataForm.append('no_npwp',data.dataPribadi.noNpwp);
    dataForm.append('nama',data.dataPribadi.Nama);
    dataForm.append('jenis_kelamin',data.dataPribadi.jenKel);
    dataForm.append('agama',data.dataPribadi.agama);
    dataForm.append('kewarganegaraan',data.dataPribadi.nationality);
    dataForm.append('tempat_lahir',data.dataPribadi.tmpLahir);
    dataForm.append('tanggal_lahir',data.dataPribadi.tglLahir);
    dataForm.append('gol_darah',data.dataPribadi.golDarah);
    dataForm.append('no_handphone',data.dataPribadi.noHp);
    dataForm.append('no_telephone',data.dataPribadi.noTelepon);
    dataForm.append('email',data.dataPribadi.email);
    dataForm.append('status_nikah',data.dataPribadi.statNikah);
    dataForm.append('created_by',data.dataPribadi.jmlAnak);

    fetch('https://api-pb.tuturcinatur.xyz/api/dataPribadi/simpan', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: dataForm
    })
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            idPribadi = result.id;
            sendDataAlamat(data.dataAlamat, idPribadi);
            sendDataKeluarga(data.dataKeluarga, idPribadi);
            sendDataBpjs(data.dataBpjs, idPribadi);
        },
        (error) => {
            console.log(error)
        }
    )    
}