import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/constants/Constants";
import MyInput from "../../components/inputs/Inputs";
import MyButton from "../../components/buttons/Buttons";


function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

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

  return (
    <>
      <div>
        <form style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
          <label htmlFor="Email">Email</label>
          <MyInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="FirstName">First Name</label>
          <MyInput
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label htmlFor="LastName">Last Name</label>
          <MyInput
            type="text"
            id="LastName"
            name="LastName"
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
          <label htmlFor="PhoneNumber">Phone Number</label>
          <MyInput
            type="tel"
            id="PhoneNumber"
            name="PhoneNumber"
            placeholder="Phone Number"
            onChange={(event) => setPhone(event.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <MyInput
            type="passwod"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
        <p>{email}</p>
        <MyButton type="button" onClick={onRegister} disabled={false}>
          Sign In
        </MyButton>
      </div>
    </>
  );
}
export default Register;

























