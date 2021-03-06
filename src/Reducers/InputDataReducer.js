const defaultState = {
    dataPribadi: {},
    dataAlamat: {},
    dataKeluarga: [],
    dataBpjs: {},
    masterAgama: [],
    masterHubunganKeluarga: [],
    masterHubunganKerja: [],
    masterStatusRumah: [],
    inputKeluargaBaru: {}
}

const inputDataReducer = (state = defaultState, action) => {
    let newArray = []
    switch(action.type){
        case 'SET_DATA_PRIBADI':
            state.dataPribadi = {
                ...action.payload
            }
            return state
        case 'SET_MASTER_AGAMA':
            state.masterAgama = [
                ...action.payload
            ]
            return state
        case 'SET_MASTER_HUBUNGAN_KELUARGA':
            state.masterHubunganKeluarga = [
                ...action.payload
            ]
            return state
        case 'SET_MASTER_HUBUNGAN_KERJA':
            state.masterHubunganKerja = [
                ...action.payload
            ]
            return state
        case 'SET_MASTER_STATUS_RUMAH':
            state.masterStatusRumah = [
                ...action.payload
            ]
            return state
        case 'SET_DATA_ALAMAT':
            state.dataAlamat = {
                ...action.payload
            }
            return state
        case 'SET_DATA_KELUARGA':
            state.dataKeluarga = [
                ...state.dataKeluarga,
                action.payload
            ]
            return state
        case 'UPDATE_DATA_KELUARGA':
            newArray = []
            for(let i=0;i < state.dataKeluarga.length; i++){
                if(state.dataKeluarga[i].openDialogTime === action.payload.openDialogTime){
                    newArray.push(action.payload)
                }else{
                    newArray.push(state.dataKeluarga[i]);
                }
            }
            state.dataKeluarga = [
                ...newArray
            ]
            return state
        case 'DELETE_DATA_KELUARGA':
            newArray = []
            for(let i=0;i < state.dataKeluarga.length; i++){
                if(state.dataKeluarga[i].openDialogTime !== action.payload.openDialogTime){
                    newArray.push(state.dataKeluarga[i])
                }
            }
            state.dataKeluarga = [
                ...newArray
            ]
            return state
        case 'SET_INPUT_KELUARGA_BARU':
            state.inputKeluargaBaru = {
                ...action.payload
            }
            return state
        case 'SET_DATA_BPJS': 
            state.dataBpjs = {
                ...action.payload
            }
            return state
        default: return state
    }
}

export default inputDataReducer;