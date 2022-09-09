import React, { useState } from "react";
import "./Home.css";
import axios from "axios";



const Home = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 


    const onLogin = () => {

        axios.post("https://smartboxdigital-academy-be.herokuapp.com/SBD-Academy/api/admins/login", {
            email: email,
            password: password,
           
        

        }).then((response) => console.log(response)).catch((error) => console.log(error));
        // window.localStorage.setItem("token", "asasjansjakbsa");
        // window.localStorage.setItem("User", "User");
        // window.location.pathname = '/admin';
    };
    return (
        <>
            <h1>Home (Public)</h1>
            <form action="">
                <label htmlFor="Email">Email</label>
                <input onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="Email" placeholder="Email" />

                <label htmlFor="Password">Password</label>
                <input onChange={(event) => setPassword(event.target.value)} type="password" id="password" name="Password" placeholder="Password" />

              
               


            </form>
            {/* <input type="submit" value="Sign in" onSubmit={onLogin}/> */}
            <button name="LogIn" type="button" onClick={onLogin} disabled={false}>
                Log in heres
            </button>
        </>
    );
};
export default Home;