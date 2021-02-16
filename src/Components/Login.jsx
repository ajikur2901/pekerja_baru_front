import React from 'react';
import {
    useDispatch, useSelector
} from 'react-redux';
import {
    fetchUser
} from '../Actions/UserActions';
import Komputer from './img/komputer.png';
import {
    Grid, Button, TextField, CircularProgress
} from '@material-ui/core'
import {
    Alert, AlertTitle
} from '@material-ui/lab'

const Login = () => {
    const [email,setEmail]          = React.useState('') ;
    const [password, setPassword]   = React.useState('');
    const [loading, setLoading]     = React.useState(false);
    const dispatch = useDispatch();
    const LoginErrorStore = useSelector(state => state.errorReducer.login);
    const [clickSubmit, setClickSubmit] = React.useState(0);
    
    const handleInputChange = (event) => {
        switch(event.target.id){
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default: return;
        }
    }

    React.useEffect(() => {
        setLoading(false);
        console.log(LoginErrorStore.errorTime)
    }, [LoginErrorStore.errorTime])

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = {
            email: email,
            password: password
        }
        setLoading(true);
        setClickSubmit(clickSubmit + 1);
        dispatch(fetchUser(formData));
    }

    return(
        <div className="absolute w-full min-h-screen h-full p-4">
            <div className="bg-white rounded-2xl h-full w-full p-4 shadow-2xl">
                <div className="
                    invisible 
                    md:absolute md:bottom-0
                    md:visible md:h-auto md:w-5/6
                    lg:left-6 lg:w-3/5 lg:content-center lg:p-6 ">
                        <img src={Komputer} alt="http://www.freepik.com" className="w-full lg:rounded-md"/>
                        <a href="http://www.freepik.com" 
                            target="_blank" 
                            className="text-blue-400"
                            rel="noreferrer">
                            Designed by pch.vector / Freepik
                        </a>
                </div>
                <div className="
                    block w-full p-4 inset-auto
                    md:absolute md:w-80 md:h-auto md:inset-y-auto md:right-4 md:top-4
                    lg:left-auto lg:right-6 lg:bottom-auto
                    ">
                    <div className="rounded-xl h-full w-full bg-white p-4 border-2 border-blue-400">
                        <form onSubmit={onSubmit} >
                            <Grid container spacing={3}>
                                <div className={!loading && clickSubmit > 0 && LoginErrorStore.isError ? 'w-full' : 'hidden'}>
                                    <Grid item xs={12}>
                                        <Alert severity="error" style={{width: '100%'}}>
                                            <AlertTitle>
                                                { LoginErrorStore.errorData === 'UnAuthorised' ? 'email atau password anda salah!' : 'Terjadi Kesalahan'}
                                            </AlertTitle>
                                        </Alert>
                                    </Grid>
                                </div>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="email"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        type="email"
                                        autoComplete="username"
                                        style={{width: '100%'}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="password"
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                        type="password"
                                        autoComplete="current-password"
                                        style={{width: '100%'}}
                                    />
                                </Grid>
                                <div className={loading ? 'w-full' : 'hidden'}>
                                    <Grid item xs={12} style={{textAlign: 'center'}}>
                                        <CircularProgress />
                                    </Grid>
                                </div>
                                <div className={!loading ? 'w-full' : 'hidden'}>
                                    <Grid item xs={12} style={{textAlign: 'center'}}>
                                        <Button variant="contained" color="primary" type="submit">
                                            Masuk
                                        </Button>
                                    </Grid>
                                </div>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;