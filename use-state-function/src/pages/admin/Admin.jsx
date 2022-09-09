import React from 'react';
import "./Admin.css";
const Admin = () => {
  return (
    <>
    <h1>Admin</h1>
    <h3>lOGGED in as {window.localStorage.getItem('user')}</h3>
    </>
  )
}
export default Admin;

// react native pt mobile app 
// react electron pt desktop app