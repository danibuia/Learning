import React from 'react';
import { Grid } from '@mui/material';
import AddProjectButton from './addProject/addProjectButton/AddProjectButton';
import Table from '../table/Table';

const Project = () => {
    return (
        <>
            
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item md={3}>
                    <AddProjectButton/>
                   
                    </Grid>
                    <Grid item md={9}  sx={{ display: 'flex', justifyContent: 'center' }}>
                        
                        <Table/>
                    </Grid>
                
                </Grid>

           

        </>
    )
}

export default Project