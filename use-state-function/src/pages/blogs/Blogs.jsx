import React from 'react';

import BasicCard from './blogCard/BlogCard';
import { Grid, Container, Button} from '@mui/material';


const Blogs = () => {
   
    return (

   <Container>
   <Grid container sx={{display:'flex', justifyContent:'center' }}>
   <Grid item >
   <BasicCard/>
     <Button href='addpost'>dsad</Button>

   
   </Grid>
   </Grid>
    

   </Container>
    )
};

export default Blogs