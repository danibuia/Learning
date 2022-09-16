import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { baseUrl } from "../../utils/constants/Constants";
const DataTable = () => {
  const [members, setMembers] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "position", headerName: "Position", width: 230 },
    { field: "avatar", headerName: "Avatar", width: 30 },
    { field: "index", headerName: "Index", width: 30 },
    { field: "linkedIn", headerName: "LinkedIn", width: 230 },
    { field: "github", headerName: "GitHub", width: 30 },
  ];
  const getMembers = () => {
    axios
      .get(`${baseUrl}/admins/get-members/all`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data.members);
        const myData = response.data.members; //store the members(from database request from server) on myData variable
        let rowsWithId = []; //create an empty array where the rows that we will render on UI, will be saved
        myData.map((item, index) => { //map - is a function for JS Arrays - it will return an Array with the same length but modified as we want
          console.log("index: ", index);
          return rowsWithId.push({ ...item, id: index }); //'...item' means that it will add every item from mapped array - myData - and it will show the object with all properties + id with the value 'index' that represent the item position from aaray starting from 0
        });
        console.log("rowsWithId: ", rowsWithId);
        setMembers(rowsWithId); //async function - React hook useState - the setter for member where we will set the array for DataGrid as is expected on the columns const declared before
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
    getMembers();// eslint-disable-next-line
  }, [accessToken]);
  return (
    <div
      style={{
        height: 400,
        width: "80%",
        marginTop: "0 50px",
        padding: "0 100px",
      }}
    >
      <DataGrid
        rows={members}
        columns={columns}
        onRowClick={(e) => window.localStorage.setItem('memberId',e.row._id)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default DataTable;