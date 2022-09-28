import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";


const DeleteMembers = ({deleteMemberById, memberIdProps, setMemberIdProps}) => {

  const [memberId, setMemberId] = useState('');
  const [accessToken, setAccessToken] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);

  useEffect(() => {
    setMemberId(memberIdProps);
  }, [memberIdProps, setMemberIdProps ]);


  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h3>Delete selected member</h3>
      <button disabled={memberId.length > 0 ? false : true} style={{ color: "red" }} type="submit" variant="outlined" onClick={() =>  dispatch(deleteMemberById(memberId,accessToken))} >
        Delete
      </button>
      
    </Box>
  );
};
export default DeleteMembers;