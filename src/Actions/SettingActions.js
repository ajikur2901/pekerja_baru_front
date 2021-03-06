
const setErrorMaster = (payload) => ({type: "SET_MASTER_ERROR", payload})

const parseJSON = (response) => {
    return new Promise((resolve) => {
        response.json()
        .then((json) => resolve({
            status: response.status,
            ok: response.ok,
            json,
        }))
    })
}

export const createAgama = (data) => dispatch => {
    let dataForm = new FormData()
    dataForm.append('agama',data)

    fetch(process.env.REACT_APP_API_AGAMA_CREATE,{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: dataForm
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const updateAgama = (data,id) => dispatch => {
    let dataJson = {
        'agama': data,
        'id': id
    }    

    fetch(process.env.REACT_APP_API_AGAMA_UPDATE,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify(dataJson)
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const deleteAgama = (id) => dispatch => {
    fetch(`${process.env.REACT_APP_API_AGAMA_DELETE}/${id}`,{
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const createHubunganKeluarga = (data) => dispatch => {
    let dataForm = new FormData()
    dataForm.append('hubungan',data)

    fetch(process.env.REACT_APP_API_HUBUNGAN_KELUARGA_CREATE,{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: dataForm
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const updateHubunganKeluarga = (data,id) => dispatch => {
    let dataJson = {
        'hubungan': data,
        'id': id
    }    

    fetch(process.env.REACT_APP_API_HUBUNGAN_KELUARGA_UPDATE,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify(dataJson)
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const deleteHubunganKeluarga = (id) => dispatch => {
    fetch(`${process.env.REACT_APP_API_HUBUNGAN_KELUARGA_DELETE}/${id}`,{
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const createHubunganKerja = (data) => dispatch => {
    let dataForm = new FormData()
    dataForm.append('hubungan',data)

    fetch(process.env.REACT_APP_API_HUBUNGAN_KERJA_CREATE,{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: dataForm
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const updateHubunganKerja = (data,id) => dispatch => {
    let dataJson = {
        'hubungan': data,
        'id': id
    }    

    fetch(process.env.REACT_APP_API_HUBUNGAN_KERJA_UPDATE,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify(dataJson)
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const deleteHubunganKerja = (id) => dispatch => {
    fetch(`${process.env.REACT_APP_API_HUBUNGAN_KERJA_DELETE}/${id}`,{
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const createStatusRumah = (data) => dispatch => {
    let dataForm = new FormData()
    dataForm.append('status',data)

    fetch(process.env.REACT_APP_API_STATUS_RUMAH_CREATE,{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: dataForm
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const updateStatusRumah = (data,id) => dispatch => {
    let dataJson = {
        'status': data,
        'id': id
    }    

    fetch(process.env.REACT_APP_API_STATUS_RUMAH_UPDATE,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify(dataJson)
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}

export const deleteStatusRumah = (id) => dispatch => {
    fetch(`${process.env.REACT_APP_API_STATUS_RUMAH_DELETE}/${id}`,{
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(parseJSON)
    .then(
        (result) => {
            console.log(result);
            if(result.ok === true && result.status === 200){
                dispatch(setErrorMaster(false))
            }else{
                dispatch(setErrorMaster(result.json));
            }
        },
        (error) => {
            console.log(error);
            dispatch(setErrorMaster(error))
        }
    )
}