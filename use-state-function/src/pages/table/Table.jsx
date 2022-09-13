import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { baseUrl } from '../home/constants/Constants';


const Table = () => {
    const [members, setMembers] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'position', headerName: 'Position', width: 300 },
        { field: 'github', headerName: 'Github', width: 180 },
    ];

    const handleMembers = () => {
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
        })
    }

    const getMembers = () => {
        return accessToken.length > 0 ? handleMembers() : null;
    }
    useEffect(() => {
        setAccessToken(window.localStorage.getItem("token"));
        getMembers();
        // eslint-disable-next-line 
    }, [accessToken])

    return (
        <div style={{ height: 400, width: '80%', marginTop: '50px', padding: '0 100px' }}>
            <DataGrid
                rows={members}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />
        </div>
       
        
    );
}

export default Table