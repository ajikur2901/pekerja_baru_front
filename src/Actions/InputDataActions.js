// action creator

const setDataPribadi = (payload) => ({type:"SET_DATA_PRIBADI", payload});
const setMasterAgama = (payload) => ({type:"SET_MASTER_AGAMA", payload});
const setMasterHubunganKeluarga = (payload) => ({type: "SET_MASTER_HUBUNGAN_KELUARGA", payload});
const setMasterHubunganKerja = (payload) => ({type: "SET_MASTER_HUBUNGAN_KERJA", payload});
const setMasterStatusRumah = (payload) => ({type: "SET_MASTER_STATUS_RUMAH", payload});
const setDataAlamat = (payload) => ({type: "SET_DATA_ALAMAT", payload});
const setDataKeluarga = (payload) => ({type: "SET_DATA_KELUARGA", payload});
const setInputKeluargaBaru = (payload) => ({type: "SET_INPUT_KELUARGA_BARU", payload});

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

export const saveDataKeluarga = (data) => dispatch => {
    dispatch(setDataKeluarga(data));
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