import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../home/constants/Constants";

function AddMember() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [accessToken, setAccessToken] = useState('');
  const [linkedIn, setlinkedIn ]=useState('');
  const [position, setPosition ]=useState('');
  const [facebook, setFacebook ]=useState('');

  const addMember = () => {
    axios
      .post(`${baseUrl}/guests/add-member`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        position: position,
        linkedIn: linkedIn,
        facebook: facebook
      },
      {  headers: { Authorization: `Bearer ${accessToken}` }})
      .then((response) => {
        console.log("response ", response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        // window.location.pathname = "/home";
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
 

useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  
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
          <label htmlFor="Position">Position</label>
          <input
            type="text"
            id="Position"
            name="Position"
            placeholder="Position"
            onChange={(event) => setPosition(event.target.value)}
          />
          <label htmlFor="Position">LinkeIn</label>
          <input
            type="text"
            id="LinkekIn"
            name="LinkekIn"
            placeholder="LinkekIn"
            onChange={(event) => setlinkedIn(event.target.value)}
          />
          <label htmlFor="Facebook">Facebook</label>
          <input
            type="text"
            id="Facebook"
            name="Facebook"
            placeholder="Facebook"
            onChange={(event) => setFacebook(event.target.value)}
          />
         
         
       
        </form>
       
        <button type="button" onClick={addMember} disabled={false}>
          Log in
        </button>
      </div>
    </>
  );
}
export default AddMember;