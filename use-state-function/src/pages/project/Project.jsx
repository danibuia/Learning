import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Table from "../table/Table";
import axios from "axios";
import { baseUrl } from "../../utils/constants/Constants";
import AddMember from "../addMember/AddMember";
import DeleteMembers from "../deleteMember/DeleteMember";
import { deleteMember } from "../../redux/actions/members/deleteMembers";


const Project = () => {

  const [updatedMembers, setUpdatedMembers] = useState([]);
  const [memberIdProps, setMemberIdProps] = useState("");

  const addMember = (
    email,
    position,
    firstName,
    lastName,
    linkedIn,
    facebook,
    avatar,
    token
  ) => {
    axios
      .post(
        `${baseUrl}/admins/add-member`,
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          position: position,
          linkedIn: linkedIn,
          facebook: facebook,
          avatar: avatar,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log("response ", response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => {
        handleMembers(setUpdatedMembers, token);
      });
  };

  const handleMembers = (accessToken) => {
    if (accessToken) {
      axios
        .get(`${baseUrl}/admins/get-members/all`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          console.log(response.data.members);
          const myData = response.data.members; // store the members ( from databse after request from server ) on myData variable
          let rowWidthId = []; // create an empty array where the rows that we will render on ui, will be saved
          myData.map((item, index) => {
            //map- is a function for JS Arrays - it will return an Array with the same lenght but modifed as we want
            return rowWidthId.push({ ...item, id: index }); /// ...item means that it will add every item from mapped array -myData- and it will show the object will all properties + id with the value 'index' that represend the item position from array starting from 0
          });
          setUpdatedMembers(rowWidthId);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  };

  // const deleteMemberById = (memberId, token) => {
  //   axios
  //     .delete(`${baseUrl}/admins/delete-member/${memberId}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       console.log(response.data.message);
  //     })
  //     .catch((eroare) => {
  //       console.log(eroare);
  //     })
  //     .finally(() => {
  //       handleMembers(setUpdatedMembers, token);
  //     });
  // };
  useEffect(() => {}, [memberIdProps, setMemberIdProps]);

  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item md={3}>
          <AddMember addMember={addMember} />
          <DeleteMembers
            deleteMemberById={deleteMember}
            memberIdProps={memberIdProps}
            setMemberIdProps={setMemberIdProps}
          />
        </Grid>
        <Grid item md={9} sx={{ display: "flex", justifyContent: "center" }}>
          <Table
            updatedMembers={updatedMembers}
            setMemberIdProps={setMemberIdProps}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
