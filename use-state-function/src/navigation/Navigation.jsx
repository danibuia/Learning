import React, {useState, useEffect} from "react";
import {  NavLink , useNavigate } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  const onLogout = () => {
    window.localStorage.removeItem("user");
    navigate('/');
    setToken();
    return window.localStorage.removeItem('token');
  }
  useEffect(()=>{
    setToken(window.localStorage.getItem('token'));
  }, [token]);

  return (
    <nav className={"nav-container"}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/table">Table</NavLink>
      <NavLink to="/inputs">Inputs</NavLink>
      <NavLink to="/addMember">AddMember</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/editable">Editable</NavLink>
      <NavLink to="/myprofile">MyProfile</NavLink>








      {token && (
        <button type="button" onClick={(onLogout)}>Sign out</button>
        )}
      
    </nav>
  );
};
export default Navigation;