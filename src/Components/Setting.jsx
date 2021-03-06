import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import { 
    CssBaseline, Toolbar, Paper, Grid
} from '@material-ui/core';
import Navigation from './Navigation';
import SettingMaster from './SettingMaster';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}))

const SettingPage = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <Navigation />
            <CssBaseline>
                <div className={classes.content}>
                    <Toolbar />
                    <Paper elevation={3} style={{padding: '10px', backgroundColor: '#E5E7EB'}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6}>
                                <SettingMaster
                                    id="agama"
                                    label="Agama"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <SettingMaster
                                    id="hubunganKerja"
                                    label="Hubungan Kerja"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <SettingMaster
                                    id="hubunganKeluarga"
                                    label="Hubungan Keluarga"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <SettingMaster
                                    id="statusRumah"
                                    label="Status Rumah"
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </CssBaseline>
        </div>
    )
}

export default SettingPage;