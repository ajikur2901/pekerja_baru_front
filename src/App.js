import React from 'react';
import {
  Switch, Route, BrowserRouter as Router, Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  autoLogin
} from './Actions/UserActions';
import {
  CircularProgress
} from '@material-ui/core'

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import InputData from './Components/InputData';
import SettingPage from './Components/Setting';
import ListData from './Components/ListData';

class App extends React.Component {
  
  componentDidMount(){
    this.props.autoLogin()
    console.log(this.props.userReducer)
  }

  render(){
    return (
      <Router>
        <div className="bg-gradient-to-b from-blue-300 to-blue-600 w-screen min-h-screen h-auto">
          <Switch>
            <Route exact path="/Dashboard">
              {
                () => {
                  if(this.props.userReducer.loggedIn === true) return <Dashboard />
                  if(this.props.userReducer.loggedIn === false) return <Redirect to="/Login" />
                  return <CircularProgress />
                }
              }
            </Route>
            <Route exact path="/InputData">
              {
                () => {
                  if(this.props.userReducer.loggedIn === true) return <InputData />
                  if(this.props.userReducer.loggedIn === false) return <Redirect to="/Login" />
                  return <CircularProgress />
                }
              }
            </Route>
            <Route exact path="/ListData">
              {
                () => {
                  if(this.props.userReducer.loggedIn === true) return <ListData />
                  if(this.props.userReducer.loggedIn === false) return <Redirect to="/Login" />
                  return <CircularProgress />
                }
              }
            </Route>
            <Route exact path="/Setting">
              {
                () => {
                  if(this.props.userReducer.loggedIn === true) return <SettingPage />
                  if(this.props.userReducer.loggedIn === false) return <Redirect to="/Login" />
                  return <CircularProgress />
                }
              }
            </Route>
            <Route path={["/","/Login"]}>
              {
                () => {
                  if(this.props.userReducer.loggedIn === true) return <Redirect to="/Dashboard" />
                  if(this.props.userReducer.loggedIn === false) return <Login />
                  return (
                    <div className="flex justify-center items-center">
                      <CircularProgress />
                    </div>
                  )
                }
              }
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispactchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispactchToProps)(App);
