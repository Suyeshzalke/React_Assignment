import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
// import Updateuser from './components/updateuser';
import ProtectedOutlet from "./Protected";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      <Navbar/>
      <ToastContainer />

     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="register" element={<Register/>}/>
     <Route element={<ProtectedOutlet />}>

     <Route path="dashboard" element={<Dashboard/>}/>
     {/* <Route path="/updateuser/:id" element={<Updateuser/>}/> */}
     </Route>




        </Routes>
    </div>
  );
}

export default App;
