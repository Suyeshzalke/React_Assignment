import axios from 'axios'

const API_URL = 'http://localhost:8421/'
let axiosConfig = {
  header: {
    'Content-Type': 'application/json',
  },
}

export const userLogin = async (email, password) => {
    try {
      const response = await axios.post(
        API_URL + 'user/userlogin',
        {
          email,
          password,
        },
        axiosConfig,
      )
      if (response.data.status) {
        localStorage.setItem('users', JSON.stringify(response.data.result))
  
        return response
      } else {
        return response
      }
    } catch (e) {
      return null
    }  
  }


  export const registerUser = async (firstname ,
    lastname,
    state,
    city,
    addressline1,
    addressline2,
    phone,
    email,
    password) => {
    return await axios.post(
      API_URL + 'user/usersignup',
      {
        firstname ,
      lastname,
      state,
      city,
      addressline1,
      addressline2,
      phone,
      email,
      password
      },
      axiosConfig,
    )
  }


  





  export const updateUser = async (user) => {
    const userupdate = await axios.post(
      API_URL + "user/updateuser",
      user,
      axiosConfig
    );
    if (userupdate.data.status) {
      localStorage.setItem("users", JSON.stringify(userupdate.data.result));
    } 
    return userupdate;
  };
  