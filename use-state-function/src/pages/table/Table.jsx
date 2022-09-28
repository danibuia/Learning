import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getMembers } from '../../redux/actions/members/getMembers.js';
import { useDispatch, useSelector } from "react-redux";


const Table = (props) => {

    const dispatch = useDispatch();
    const membersFromRedux = useSelector(state => state.membersState)

    const { setMemberIdProps } = props;

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
        setMembers(membersFromRedux?.members);
        console.log('membersFromRedux: ', membersFromRedux)
      }, [membersFromRedux])

    const handleMembersWithToken = () => {
        accessToken ? dispatch(getMembers(accessToken)) : setMembers([]);

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
                checkboxSelection
                onCellClick={(details, event) => { event.target.checked === true ? setMemberIdProps(details.row._id) : setMemberIdProps('') }}
            />

        </div>
    );
}

export default Table