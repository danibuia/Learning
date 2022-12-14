import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../home/constants/Constants";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [accessToken, setAccessToken] = useState('');
  const onRegister = () => {
    axios
      .post(`${baseUrl}/admins/register`, {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      })
      .then((response) => {
        console.log("response ", response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        // window.location.pathname = "/home";
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const postMembers = () => {
    return accessToken.length > 0 ? onRegister() : null;
}
useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
    postMembers();
    // eslint-disable-next-line 
}, [accessToken])

  return (
    <>
      <div>
        <form style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input
            type="text"
            id="PhoneNumber"
            name="PhoneNumber"
            placeholder="Phone Number"
            onChange={(event) => setPhone(event.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
       
        <button type="button" onClick={onRegister} disabled={false}>
          Log in
        </button>
      </div>
    </>
  );
}
export default Register;

























