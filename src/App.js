
// import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom' 
import HrLogin from './screens/HrLogin.js';
import EmployeeLogin from './screens/EmployeeLogin';
import Register from './screens/Register';
import Verification from './screens/Verification';
import HrProtect from './screens/HrProtect';
import HrDashboard from './screens/HrDashboard';
import InviteEmployee from './screens/InviteEmployee';
import Invite from './screens/Invite';
import EmployeeRegister from './screens/EmployeeRegister';
import EmployeeDashboard from './screens/EmployeeDashboard.js';
import EmployeeProtect from './screens/EmployeeProtect.js';
import EmployeeProfile from './screens/EmployeeProfile.js';
function App() {
  return (
    <Router>
      <Route path='/' component={EmployeeLogin} exact></Route>
      <Route path='/hr-login' component={HrLogin} exact></Route>
      <Route path='/register' component={Register} exact></Route>
      <Route path='/identity-verification' component={Verification} exact></Route>
      <Route path='/hr-dashBoard'> <HrProtect Show={HrDashboard}/></Route>
      <Route path='/invite-employee'> <HrProtect Show={InviteEmployee}/></Route>
      <Route path='/invite' component={Invite}></Route>
      <Route path='/register-employee' component={EmployeeRegister}></Route>
      <Route path='/employee-dashboard'><EmployeeProtect Show={EmployeeDashboard}/></Route>
      <Route path='/employee-profile'><EmployeeProtect Show={EmployeeProfile}/></Route>
    </Router>
  );
}

export default App;
