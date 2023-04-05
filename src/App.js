import './App.css';
import Dashboard from './components/Dashboard';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from './Pages/Register';
import SuccessMessage from './Pages/successMessage';
import ResetPassword from './Pages/Reset';
import ForgotPassword from './Pages/ForgotPassword';




function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/userCreated" element={<SuccessMessage/>}></Route>
              <Route path='/forgotPassword/:id/:token' element={<ForgotPassword/>}></Route>\
              <Route path='/resetPassword' element={<ResetPassword/>}></Route>
            </Routes>
    </div>
  );
}

export default App;
