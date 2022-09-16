import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./constants/Constants";


const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState(window.localStorage.getItem("token"))
  const [data, setData] = useState([])



  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log("value is:", event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log("value is:", event.target.value);
  };
  const onLogin = () => {
    axios
      .post(`${baseUrl}/admins/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response ", response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        window.location.pathname = "/admin";
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const handleMembers = () => {
    axios
      .get(`${baseUrl}/admins/get-members/all`, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("response ", response.data);
         setAccessToken(response.data.accessToken)
        setData(response.data.members)
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    handleMembers();
  }, []);
  return (
    <>
      <h2>Home (Public). Hi{data[8]?.firstName } !</h2>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleEmail}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </form>
        <button type="button" onClick={() => onLogin()} disabled={false}>
          Sign In
        </button>
          <a href="/register">N-ai cont? fatz aici</a>
      </div>
    </>
  );
};
export default Home;

//axios,post ("url",{object}, {headers:{'Autorization':'Bearer..' }})then


//verificarea requesturilor