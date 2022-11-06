import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { userlogout } from '../Slice/Authslice'
import { useNavigate } from 'react-router-dom'
import profile from "../Logo/profile.png";
import { ToastContainer, toast } from "react-toastify";

export default function Navbar() {
 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userdata = useSelector((state) => state.auth)
  
    const handleLogout = () => {
      localStorage.clear()
      dispatch(userlogout())
      toast.warning("Logout Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate('/')
    }


  return (
    <>
      <nav class="navbar">
        <div class="logo">Sy App</div>
        <ul class="nav-links">
        {userdata.isLoggedIn ? (
            <div>
              
             
            
               

      <button className="btn btn-md btn-danger" onClick={handleLogout}>
                Logout
              </button>&nbsp;&nbsp;
            </div>
          ) : (
            <div class="menu">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/login">
                Login
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/register">
                  Register
                </Link>
              </li>
           
           
            </div>
             )} 
        </ul>
      </nav>
    </>
  )
}
