// action creators

const setUser = (payload) => ({type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

// methods

export const autoLogin = () => dispatch => {
    fetch('https://api-pb.tuturcinatur.xyz/api/user', {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(
        (data) => {
            if(data.hasOwnProperty('user')){
                dispatch(setUser(data.user))
            }else{
                dispatch(logUserOut());
            }
        },
        (error) => {
            dispatch(logUserOut());
        }
    )
}
        
export const fetchUser = (userInfo) => dispatch => {

    var data = new FormData();

    for(var key in userInfo){
        data.append(key, userInfo[key]);
    }

    fetch('https://api-pb.tuturcinatur.xyz/api/login', {
        method: "POST",
        header: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
        },
        body: data
    })
    .then(res => res.json())
    .then(data => {
        if(data.hasOwnProperty('token')){
            localStorage.setItem("token", data.token)
            dispatch(autoLogin());
        }else{
            dispatch(logUserOut());
        }
    })
}