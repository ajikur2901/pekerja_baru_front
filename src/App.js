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

class App extends React.Component {
  
  componentDidMount(){
    this.props.autoLogin()
  }

  render(){
    return (
      <Router>
        <div className="bg-gradient-to-b from-blue-300 to-blue-600 w-screen min-h-screen h-auto">
          <Switch>
            <Route path="/Login">
              {
                this.props.userReducer.loggedIn === false ? <Login /> : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/">
              {
                this.props.userReducer.loggedIn === false ? <Redirect to="/Login" /> : <Dashboard />
              }
            </Route>
            <Route path="/InputData">
              {
                this.props.userReducer.loggedIn === false ? <Redirect to="/Login" /> : <InputData />
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
