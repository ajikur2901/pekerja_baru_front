import React from 'react';
import {
    Link
} from 'react-router-dom'
import {
    useSelector, useDispatch
} from 'react-redux';
import {
    makeStyles
} from '@material-ui/core/styles';
import { 
    AppBar, CssBaseline, Toolbar, Typography, Drawer, 
    List, ListItem, ListItemIcon, ListItemText,
    IconButton, Hidden 
} from '@material-ui/core';
import {
    Edit as EditIcon,
    List as ListIcon,
    Settings as SettingIcon,
    ExitToApp,
    Menu as MenuIcon
} from '@material-ui/icons'
import {
    logOut
} from '../Actions/UserActions'
import ListData from './ListData' ;


const drawerWidth =  240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    grow: {
        flexGrow: 1,
    },
}))


const Dashboard = () => {
    const userStore = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [mobileOpen,setMobileOpen] = React.useState(false);
    const menuItem = [
        {
            name: 'input data',
            icon: <EditIcon />,
            link: '/InputData'
        },
        {
            name: 'List data',
            icon: <ListIcon />,
            link: '/ListData'
        },
        {
            name: 'setting',
            icon: <SettingIcon />,
            link: 'Settings'
        },
    ];

    const handleLogOut = () => {
        dispatch(logOut())
    }

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen)
    }

    return(
        <div className={classes.root}>
            <CssBaseline>
                <AppBar className={classes.appBar} position="fixed" color="primary">
                    <Toolbar>
                        <Hidden mdUp implementation="css">
                            <IconButton
                                onClick={handleDrawer}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Link to="/">
                            <Typography variant="h6" noWrap>
                                Pekerja Baru CV. Karya Hidup Sentosa
                            </Typography>
                        </Link>
                        <div className={classes.grow}></div>
                        <div classes={{ display: 'flex'}}>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={handleLogOut}
                            >
                                <ExitToApp />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Hidden smDown implementation="css">
                    <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                {
                                    menuItem.map((items,index) => (
                                        <ListItem button key={index} component={Link} to={items.link}>
                                            <ListItemIcon>{items.icon}</ListItemIcon>
                                            <ListItemText primary={items.name} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <Drawer 
                        className={classes.drawer} 
                        variant="temporary" 
                        classes={{paper: classes.drawerPaper}}
                        open={mobileOpen}
                        onClose={handleDrawer}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                {
                                    menuItem.map((items,index) => (
                                        <ListItem button key={index} component={Link} to={items.link}>
                                            <ListItemIcon>{items.icon}</ListItemIcon>
                                            <ListItemText primary={items.name} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>
                    </Drawer>
                </Hidden>
                <div className={classes.content}>
                    <Toolbar />
                    <ListData />
                </div>
            </CssBaseline>
        </div>
    )
}

export default Dashboard;