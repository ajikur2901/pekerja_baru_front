import React from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import InputData from './Components/InputData';
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
                  if(this.props.userReducer.loggedIn === true){
                    return <Dashboard />
                  }else if(this.props.userReducer.loggedIn === false){
                    return <Redirect to="/Login" />
                  }else{
                    return <CircularProgress />
                  }
                }
              }
            </Route>
            <Route exact path="/InputData">
              {
                () => {
                  if(this.props.userReducer.loggedIn === true){
                    return <InputData />
                  }else if(this.props.userReducer.loggedIn === false){
                    return <Redirect to="/Login" />
                  }else{
                    return <CircularProgress />
                  }
                }
              }
            </Route>
            <Route path={["/","/Login"]}>
              {
                () => {
                  if(this.props.userReducer.loggedIn === true){
                    return <Redirect to="/Dashboard" />
                  }else if(this.props.userReducer.loggedIn === false){
                    return <Login />
                  }else{
                    return (
                      <div className="flex justify-center items-center">
                        <CircularProgress />
                      </div>
                    )
                  }
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
