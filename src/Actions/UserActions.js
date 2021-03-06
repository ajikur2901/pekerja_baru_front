// action creators

const setUserIn     = (payload) => ({type: "SET_USER", payload})
const setUserOut    = ()        => ({type: "LOG_OUT"})
const setErrorLogin = (payload) => ({type: "SET_LOGIN_ERROR", payload})

// methods

export const autoLogin = () => dispatch => {
    fetch(process.env.REACT_APP_API_USER, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(
        (data) => {
            if(data.hasOwnProperty('user')){
                dispatch(setUserIn(data.user))
                dispatch(setErrorLogin(false));
            }else{
                dispatch(setUserOut());
                dispatch(setErrorLogin(data));
            }
        },
        (error) => {
            dispatch(setUserOut());
            dispatch(setErrorLogin(error));
        }
    )
}
        
export const fetchUser = (userInfo) => dispatch => {
    
    var data = new FormData();

    for(var key in userInfo){
        data.append(key, userInfo[key]);
    }

    fetch(process.env.REACT_APP_API_LOGIN, {
        method: "POST",
        header: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
        },
        body: data
    })
    .then(res => res.json())
    .then(
        (data) => {
            if(data.hasOwnProperty('token')){
                sessionStorage.setItem("token", data.token)
                dispatch(autoLogin());
                dispatch(setErrorLogin(false));
            }else{
                dispatch(setUserOut());
                dispatch(setErrorLogin(data));
            }
        },
        (error) => {
            dispatch(setUserOut());
            dispatch(setErrorLogin(error));
        }
    )

}

export const logOut = () => dispatch => {
    sessionStorage.removeItem("token");
    dispatch(setUserOut())
}