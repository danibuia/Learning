import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../home/constants/Constants';


const PostCard = () => {
    const [posts, setPosts] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    const card = [

    ]

    const handlePosts = (accessToken) => {
      if (accessToken){
        axios.get(`${baseUrl}/admins/get-posts/all`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            console.log(response.data);
            const myData = response.data.posts; // store the members ( from databse after request from server ) on myData variable

            myData.map((item, index) => { //map- is a function for JS Arrays - it will return an Array with the same lenght but modifed as we want
                console.log("index:", index);
                return posts.push({ ...item, id: index }); /// ...item means that it will add every item from mapped array -myData- and it will show the object will all properties + id with the value 'index' that represend the item position from array starting from 0
            });
             //async function - React hook useState - the setter for member where we will set the array for DataGrid as is expected on the columns const declared before;
           setPosts();
             

        }).catch((error) => {
            console.log('error: ', error);
        })
    }
  };
    const getPosts = () => {
        return accessToken.length > 0 ? handlePosts() : null;
    }
    useEffect(() => {
        setAccessToken(window.localStorage.getItem("token"));
        getPosts();
        // eslint-disable-next-line 
    }, [accessToken])

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea card={card}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
                <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
}
  export default PostCard;