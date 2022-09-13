import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../home/constants/Constants';

const UpdateMember = () => {
    const [members, setMembers] = useState([]);
    const [accessToken, setAccessToken] = useState('');

    axios.patch(`${baseUrl}/admins/update-members/all`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
        console.log(response.data.members);
        const myData = response.data.members; // store the members ( from databse after request from server ) on myData variable
        let rowWidthId = [];  // create an empty array where the rows that we will render on ui, will be saved
        myData.map((item, index) => { //map- is a function for JS Arrays - it will return an Array with the same lenght but modifed as we want
            console.log("index:", index);
            return rowWidthId.UpdateMember({ ...item, id: index }); /// ...item means that it will add every item from mapped array -myData- and it will show the object will all properties + id with the value 'index' that represend the item position from array starting from 0
        });
        patchMembers(rowWidthId); //async function - React hook useState - the setter for member where we will set the array for DataGrid as is expected on the columns const declared before;
        console.log("myData ", myData);

    }).catch((error) => {
        console.log('error: ', error);
    })
}
useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
    patchMembers();
    // eslint-disable-next-line 
}, [accessToken])

return = () ={

    <button onclick{UpdateMember}>
    </button>
}



export default UpdateMember;