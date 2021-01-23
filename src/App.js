import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import InputData from './Components/InputData';
import {
  Switch, Route, BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-red-600 to-white w-screen min-h-screen">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/InputData">
            <InputData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
