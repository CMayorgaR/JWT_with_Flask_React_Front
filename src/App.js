import './App.css';
import injectContext from './Store/appContext';
import SignUp from './Components/SingUp';
import Login from './Components/Login';
import Private from './Components/Private';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/sign_up' element={<SignUp />} />
    <Route path='/log_in' element={<Login />} />
    <Route path='/private' element={<Private children={<Dashboard />} />} />
    {/* <Private path='/dashboard' component={()=><Dashboard />} /> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default injectContext(App);

