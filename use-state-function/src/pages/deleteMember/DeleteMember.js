import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { getMembers } from "../../redux/actions/members/getMembers";


const DeleteMembers = ({
  deleteMemberById,
  memberIdProps,
  setMemberIdProps,
}) => {
  const dispatch = useDispatch();
  const [memberId, setMemberId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);

  useEffect(() => {
    setMemberId(memberIdProps);
  }, [memberIdProps, setMemberIdProps]);

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
      <button
        style={{ color: "red" }}
        type="submit"
        variant="outlined"
        onClick={() =>
          dispatch(
            deleteMemberById(memberId, accessToken, () =>
              dispatch(getMembers(accessToken))
            ))}
      >
        Delete
      </button>
    </Box>
  );
};
export default DeleteMembers;

