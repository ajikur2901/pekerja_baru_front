const defaultState = {
    login: {
        isError: false,
        errorData: null,
        errorTime: null
    },
    master: {
        isError: false,
        errorData: null,
        errorTime: null
    }
}

const errorReducer = (state = defaultState,action) => {
    switch(action.type){
        case 'SET_LOGIN_ERROR':
            let newLogin = {};
            if(action.payload === false){
                newLogin = {
                    isError: false,
                    errorData: {},
                    errorTime: Math.floor(Date.now())
                }
            }else{
                newLogin = {
                    isError: true,
                    errorData: action.payload.error ? action.payload.error : null,
                    errorTime: Math.floor(Date.now())
                }
            }
            state.login = {
                ...newLogin
            }
            return state
        case 'SET_MASTER_ERROR':
            console.log(action);
            let newMaster = {};
            if(action.payload === false){
                newMaster = {
                    isError: false,
                    errorData: {},
                    errorTime: Math.floor(Date.now())
                }
            }else{
                newMaster = {
                    isError: true,
                    errorData: action.payload ? action.payload : null,
                    errorTime: Math.floor(Date.now())
                }
            }
            state.master = {
                ...newMaster
            }
            return state
        default: return state;
    }
}

export default errorReducer