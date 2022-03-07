import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={EmployeeList}></Route>
            <Route exact path="/all" component={EmployeeList}></Route> 
            <Route exact path="/add" component={AddEmployee}></Route> 
            <Route exact path = "/edit/:id" component={EditEmployee}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
