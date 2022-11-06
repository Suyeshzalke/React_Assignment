import { Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";



export default function ProtectedOutlet(){
    const isLoggedIn = JSON.parse(localStorage.getItem('users'))
    if(isLoggedIn){
        return <Outlet/>;
    }else {

        return<Navigate to="/Login"/>;
    }
}