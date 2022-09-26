import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Table from '../table/Table';
import axios from 'axios';
import { baseUrl } from '../home/constants/Constants';
import AddMember from '../addMember/AddMember';
import DeleteMembers from '../deleteMember/DeleteMember';

const Project = () => {
    const [updatedMembers, setUpdatedMembers]= useState([]);
    const addMember = (email, password, firstName, lastName, linkedIn, facebook, token) => {
        axios
            .post(`${baseUrl}/admins/add-member`, {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                linkedIn: linkedIn,
                facebook: facebook
            },
                { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                console.log("response ", response.data);
                handleMembers(setUpdatedMembers, token)
                // window.localStorage.setItem("token", response.data.accessToken);
                // window.location.pathname = "/home";
            })
            .catch((error) => {
                console.log("error: ", error);
            })
            .finally(()=>  {
                handleMembers(setUpdatedMembers, token)
            });
    }

    const handleMembers = (setMembers, accessToken) => {
        if(accessToken) {
        axios.get(`${baseUrl}/admins/get-members/all`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            console.log(response.data.members);
            const myData = response.data.members; // store the members ( from databse after request from server ) on myData variable
            let rowWidthId = [];  // create an empty array where the rows that we will render on ui, will be saved
            myData.map((item, index) => { //map- is a function for JS Arrays - it will return an Array with the same lenght but modifed as we want
                console.log("index:", index);
                return rowWidthId.push({ ...item, id: index }); /// ...item means that it will add every item from mapped array -myData- and it will show the object will all properties + id with the value 'index' that represend the item position from array starting from 0
            });
            setMembers(rowWidthId); //async function - React hook useState - the setter for member where we will set the array for DataGrid as is expected on the columns const declared before;
            console.log("myData ", myData);

        }).catch((error) => {
            console.log('error: ', error);
        });
    }
    }
    const deleteMemberById = (memberId, accessToken ) => {
       
        axios.delete(`${baseUrl}/admins/delete-member/${memberId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((response) => {
            console.log(response.data.message);
          }).catch((eroare) => {
            console.log(eroare)
          });
      };
    
      
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item md={3}>
                    <AddMember addMember={addMember}/>
                    <DeleteMembers deleteMemberById={deleteMemberById}/>
                </Grid>
                <Grid item md={9} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Table handleMembers={handleMembers} updatedMembers={updatedMembers} />
                </Grid>
            </Grid>
        </>
    )
}

export default Project