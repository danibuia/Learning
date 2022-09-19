import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../home/constants/Constants";


const DeleteMembers = () => {
  const [memberId, setMemberId] = useState(window.localStorage.getItem('memberId'));
  const [accessToken, setAccessToken] = useState("");
  const [message, setMessage] = useState("");
  // axios.post('url', {body request / payload}, {headers: {Authorization: 'Bearer '}})
  const deleteMemberById = () => {
    axios
      .delete(`${baseUrl}/admins/delete-member/all${memberId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log(response.data.message);
        setMessage(response.data.message);
      })
      .catch((eroare) => {
        console.log(eroare);
      });
  };
  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <input
        placeholder="Id"
        required
        id="id"
        label="Id"
        name="text"
        autoComplete="text"
        onChange={(e) => setMemberId(e.target.value)}
      />
      <button style={{ color: "red" }} type="submit" variant="outlined" onClick={() => deleteMemberById()}>
        Delete
      </button>
      {message.length > 0 ? <p>{message}</p> : null}
    </form>
  );
  
};
export default DeleteMembers;