
import '../css/Register.css';
import {useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import { registerUser } from '../Service/Auth.service';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register(){
  const navigate = useNavigate();
  
  const [input, setInput] = useState({
      firstname: "",
      lastname:"",
      state:"",
      city: "",
      addressline1:"",
      addressline2:"",
      phone:"",
      email:"",
      password: ""

  });
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [text, setText] = useState(""); 

const [gender,setGender] =useState("")
  const [valid, setValid] = useState({
    firstname: true,
    lastname:true,
    state:true,
    city: true,
    addressline1:true,
    phone:true,
    email:true,
    password: true,
      firstnameError: "",
      lastnameError: "",
      stateError: "",
      cityError: "",
      addressline1Error: "",
      phoneError: "",
      emailError: "",
      passwordError: "",


  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setInput((previousValue) => ({
          ...previousValue,
          [name]: value
      }));

  };

  const validatefirstname = (firstname) => {
      if (firstname.length == 0) {
          setValid((previousValue) => ({
              ...previousValue,
              firstname: false,
              firstnameError: "Please Enter Name"
          }))
      } else {
          setValid((previousValue) => ({
              ...previousValue,
              firstname: true,
              firstnameError: ""
          }))
      }
  }
  const validatelastname = (lastname) => {
    if (lastname.length == 0) {
        setValid((previousValue) => ({
            ...previousValue,
            lastname: false,
            lastnameError: "Please Enter LastName"
        }))
    } else {
        setValid((previousValue) => ({
            ...previousValue,
            lastname: true,
            lastnameError: ""
        }))
    }
}
const validatestate = (state) => {
    if (state.length == 0) {
        setValid((previousValue) => ({
            ...previousValue,
            state: false,
            stateError: "Please Enter State"
        }))
    } else {
        setValid((previousValue) => ({
            ...previousValue,
            state: true,
            stateError: ""
        }))
    }
}
const validatecity = (city) => {
    if (city.length == 0) {
        setValid((previousValue) => ({
            ...previousValue,
            city: false,
            cityError: "Please Enter City"
        }))
    } else {
        setValid((previousValue) => ({
            ...previousValue,
            city: true,
            cityError: ""
        }))
    }
}
const validateaddressline1 = (addressline1) => {
    if (addressline1.length == 0) {
        setValid((previousValue) => ({
            ...previousValue,
            addressline1: false,
            addressline1Error: "Please Enter Addressline1"
        }))
    } else {
        setValid((previousValue) => ({
            ...previousValue,
            addressline1: true,
            addressline1Error: ""
        }))
    }
}
  const validatephone = (phone ) => {
    if (phone .length == 0) {
        setValid((previousValue) => ({
            ...previousValue,
            phone : false,
            phoneError: "Please Enter phone "
        }))
    } else {
        setValid((previousValue) => ({
            ...previousValue,
            phone : true,
            phoneError: ""
        }))
    }
}

  const validateEmail = (email) => {

      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailIsValid = pattern.test(email);

      if (emailIsValid) {
          setValid((previousValue) => ({
              ...previousValue,
              email: true,
              emailError: ""
          }))
      } else {
          setValid((previousValue) => ({
              ...previousValue,
              email: false,
              emailError: "Please Enter Valid Email"
          }))
      }
  }
  const validatePassword = (password) => {
      if (password.length == 0) {
          setValid((previousValue) => ({
              ...previousValue,
              password: false,
              passwordError: "Please Enter Passoword"
          }))
      } else {
          setValid((previousValue) => ({
              ...previousValue,
              password: true,
              passwordError: ""
          }))
      }
  }
const signupUser =async () => {
  const apiResponse = await registerUser (input.firstname ,
    input.lastname,
    input.state,
    input.city,
    input.addressline1,
    input.addressline2,
    input.phone,
    input.email,
    input.password) 
  console.log(apiResponse.data)
  if(apiResponse.data.status===true){
    toast.success("Register Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
 
    navigate('/login')
   
  }
  
}

      const handleSubmit = (e) => {
          e.preventDefault();
      
      }
    return(
      <div class="container-fluid stylish-form">
      <h2 class="text-center">Register </h2>
      <div class="row mar20" >
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="inner-section">
            <form className="form-control" onSubmit={(e) => handleSubmit(e)}>
              <div class="mar20 inside-form">
                <h2 class="font_white text-center">SIGN UP</h2>
                
                <div class="input-group">
                <div className="col-md-4">
                                        <label>First Name:</label>
                                    </div>
          
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  
                  <input type="firstname" className="form-control" name="firstname" onChange={handleChange} onBlur={(e) => validatefirstname(e.target.value)} />
                                        {!valid.firstname && <span className="text-danger">{valid.firstnameError}</span>}
                </div>
                   
                <div class="input-group">
                <div className="col-md-4">
                                        <label>Last Name:</label>
                                    </div>
          
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  
                  <input type="lastname" className="form-control" name="lastname" onChange={handleChange} onBlur={(e) => validatelastname(e.target.value)} />
                                        {!valid.lastname && <span className="text-danger">{valid.lastnameError}</span>}
                </div>
                   
                <div class="input-group">
                <div className="col-md-4">
                                        <label>State:</label>
                                    </div>
          
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  
                  <input type="state" className="form-control" name="state" onChange={handleChange} onBlur={(e) => validatestate(e.target.value)} />
                                        {!valid.state && <span className="text-danger">{valid.stateError}</span>}
                </div>
                   
                <div class="input-group">
                <div className="col-md-4">
                                        <label>City:</label>
                                    </div>
          
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  
                  <input type="city" className="form-control" name="city" onChange={handleChange} onBlur={(e) => validatecity(e.target.value)} />
                                        {!valid.city && <span className="text-danger">{valid.cityError}</span>}
                </div>
                   
                <div class="input-group">
                <div className="col-md-4">
                                        <label>Addressline1:</label>
                                    </div>
          
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  
                  <input type="addressline1" className="form-control" name="addressline1" onChange={handleChange} onBlur={(e) => validateaddressline1(e.target.value)} />
                                        {!valid.addressline1 && <span className="text-danger">{valid.addressline1Error}</span>}
                </div>
                <div class="input-group">
                <div className="col-md-4">
                                        <label>Addressline2:</label>
                                    </div>
          
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  
                  <input type="addressline2" className="form-control" name="addressline2" onChange={handleChange}  />
                </div>
                <div class="input-group">
                <div className="col-md-4">
                                        <label>Phone no: </label>
                                    </div>
                  <span class="input-group-addon"><i class="fa fa-envelope "></i></span>
                  <input type="phone" className="form-control" name="phone" onChange={handleChange} onBlur={(e) => validatephone (e.target.value)} />
                                        {!valid.phone && <span className="text-danger">{valid.phoneError}</span>}
                </div>
                
                <div class="input-group">
                <div className="col-md-4">
                                        <label>Email Id : </label>
                                    </div>
                  <span class="input-group-addon"><i class="fa fa-envelope "></i></span>
                  <input type="email" className="form-control" name="email" onChange={handleChange} onBlur={(e) => validateEmail(e.target.value)} />
                                        {!valid.email && <span className="text-danger">{valid.emailError}</span>}
                </div>
                <div class="input-group">
                <div className="col-md-4">
                                        <label>Password: </label>
                                    </div>
                  <span class="input-group-addon"><i class="fa fa-lock "></i></span>
                  <input type="password" className="form-control" name="password" onChange={handleChange} onBlur={(e) => validatePassword(e.target.value)} />
                                        {!valid.password && <span className="text-danger">{valid.passwordError}</span>}
                </div>
                <div>
                                    <button type="submit" class="btn btn-primary"
                                        onClick={signupUser}>Create Account</button>
                                              <ToastContainer />
                                      {show && <span className={text}>{message}</span>}
                                    </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <a href="fb.com/ervijender"><h2 class="text-center font_white">Thank You For Your Registration</h2></a>
    </div>
    )

}