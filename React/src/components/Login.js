import '../css/Login.css'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userlogin } from "../Slice/Authslice";
import { userLogin } from '../Service/Auth.service';
import { ToastContainer, toast } from "react-toastify";


export default function Login(){
  const isLoggedIn = JSON.parse(localStorage.getItem('users'))
  useEffect(()=>{
    if(isLoggedIn){
      navigate("/")
    }
  },[])

    const dispatch = useDispatch();
    const [input, setInput] = useState({
      email: "",
      password: "",
    });
    const [valid, setValid] = useState({
      email: false,
      password: false,
  
      emailError: "",
      passwordError: "",
    });
    const [msg, responseMsg] = useState();
    let navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInput((previousValue) => ({
        ...previousValue,
        [name]: value,
      }));
    };
    const validateemail = (email) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailIsValid = pattern.test(email);
  
      if (emailIsValid) {
        setValid((previousValue) => ({
          ...previousValue,
          email: false,
          emailError: "",
        }));
      } else {
        setValid((previousValue) => ({
          ...previousValue,
          email: true,
          emailError: "Please Enter Email",
        }));
      }
    };
    const validatepassword = (password) => {
      if (password.length < 1) {
        setValid((previousValue) => ({
          ...previousValue,
          password: true,
          passwordError: "Enter password",
        }));
      } else {
        setValid((previousValue) => ({
          ...previousValue,
          password: false,
          passwordError: "",
        }));
      }
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    };
  
  
    const buttonHandler=async()=>{
  
    const res = await userLogin(input.email, input.password);
  
    console.log(res.data.status)
    if(res.data.status === true){
      dispatch(userlogin(res.data));
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate('/dashboard')
     
    }else{
      alert("please fill data")

    }
  
  }



    return(
        <>
          <div class="wrapper fadeInDown">
      <div id="formContent">
        <h1> Login</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            onBlur={(e) => validateemail(e.target.value)}
            onChange={handleChange}
          />
          {valid.email && (
            <span className="text-danger">{valid.emailError}</span>
          )}
          <br />
          <br />
          <input
            type="text"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            onBlur={(e) => validatepassword(e.target.value)}
            onChange={handleChange}
          />
          {valid.password && (
            <span className="text-danger">{valid.passwordError}</span>
          )}
          <br />
          <br />
         
          <button
            type="submit"
            className="btn btn-info "
            onClick={buttonHandler}
          >
            login{" "}
          </button>
          {<b className="text-info">{responseMsg}</b>}
        </form>

        <div id="formFooter">
          <a class="underlineHover" href="#"><Link class="nav-link active" to="/Forgetpassword  ">
          Forgot Password?
                </Link>
      
          </a>
        </div>
      </div>
    </div>
        </>
    )
}