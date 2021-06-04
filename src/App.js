import logo from './logo.svg';
import './App.css';
import EmployeeListComponent from './components/EmployeeListComponent'
import AddNewEmployeeComponent from './components/AddNewEmployeeComponent'
import EditEmployeeComponent from './components/EditEmployeeComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App"> 
    <Switch>
      <Route path="/" exact component={EmployeeListComponent}></Route>
      <Route path="/employees" component={EmployeeListComponent}></Route>
      <Route path="/addemployee" component={AddNewEmployeeComponent}></Route>
      <Route path="/editemployee/:id" component={EditEmployeeComponent}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
