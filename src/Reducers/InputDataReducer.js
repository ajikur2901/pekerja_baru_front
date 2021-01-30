const defaultState = {
    dataPribadi: {},
    dataAlamat: {},
    dataKeluarga: {},
    dataBpjs: {}
}

const inputDataReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_DATA_PRIBADI':
            state.dataPribadi = {
                ...action.payload
            }
            return state
        default: return state
    }
}

export default inputDataReducer;