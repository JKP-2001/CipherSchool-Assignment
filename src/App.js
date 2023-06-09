import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import SideBar from './Components/BasicLayouts/SideBar';
import Home from './Components/Home';
// import { Home } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home />}></Route>
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/verify-account' element={<LoginOtp />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/set-new-password/:token' element={<SetNewPassword />}></Route>
        <Route path='/create-password/:token' element={<CreateNewPassword />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
