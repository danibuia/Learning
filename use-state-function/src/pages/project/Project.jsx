import React from 'react';
import AddprojectButton from './addProject/addProjectButton/AddProjectButton';
import { Grid } from '@mui/material';
import ProjectCard from './addProject/addProjectCard/AddProjectCard';

const Project = () => {
    return (
        <>
            
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item md={1}>
                    
                    <AddprojectButton/>
                 
                    </Grid>
                    <Grid item md={11}  sx={{ display: 'flex', justifyContent: 'center' }}>
                        
                        <ProjectCard/>
                    </Grid>
                
                </Grid>

           

        </>
    )
}

export default Project