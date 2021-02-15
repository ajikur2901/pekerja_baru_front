import React from 'react';
import {
    connect
} from 'react-redux';
import {
    fetchUser
} from '../Actions/UserActions';
import Komputer from './img/komputer.png';
import {
    Grid, Button, TextField
} from '@material-ui/core'


class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchUser(this.state);
    }

    render(){
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
                            <form onSubmit={this.onSubmit} >
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="email"
                                            label="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleOnChange}
                                            type="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="password"
                                            label="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleOnChange}
                                            type="password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary" type="submit">
                                            Masuk
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(Login);