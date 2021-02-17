import React from 'react';
import {
    useSelector, useDispatch
} from 'react-redux';
import {
    makeStyles
} from '@material-ui/core/styles';
import { 
    CssBaseline, Toolbar
} from '@material-ui/core';
import Navigation from './Navigation';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}))


const Dashboard = () => {
    const userStore = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Navigation />
            <CssBaseline>
                <div className={classes.content}>
                    <Toolbar />
                    dashboard
                </div>
            </CssBaseline>
        </div>
    )
}

export default Dashboard;