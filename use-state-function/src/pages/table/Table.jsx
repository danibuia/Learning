import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
// import { baseUrl } from '../home/constants/Constants';


const Table = ({handleMembers, updatedMembers}) => {
    const [members, setMembers] = useState([]);
    const [accessToken, setAccessToken] = useState();
    const columns = [
        { field: '_id', headerName: 'ID', width: 130 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'position', headerName: 'Position', width: 300 },
        { field: 'github', headerName: 'Github', width: 180 },
    ];

    useEffect(() => {
        setMembers(updatedMembers);
    },[updatedMembers]);

    const handleMembersWithToken = () => {
        return accessToken ? handleMembers(setMembers, accessToken) : null;
    }

    useEffect(() => {
        setAccessToken(window.localStorage.getItem("token"));
        handleMembersWithToken();
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