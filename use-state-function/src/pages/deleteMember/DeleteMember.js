import React, { useEffect, useState } from "react";

const DeleteMembers = ({deleteMemberById} ) => {
  const [memberId, setMemberId] = useState(
    window.localStorage.getItem("memberId")
  );
  const [accessToken, setAccessToken] = useState("");
  
  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);
  return (
    <>
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
     
    </form>
    <button
        style={{ color: "red" }}
        type="submit"
        variant="outlined"
        onClick={() => deleteMemberById(accessToken,memberId)}
      >
        Delete
      </button>
      </>
  );
};
export default DeleteMembers;