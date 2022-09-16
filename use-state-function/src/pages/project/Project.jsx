import React from 'react';
import AddprojectButton from './addProject/addProjectButton/AddProjectButton';
import ProjectCard from './addProject/addProjectCard/AddProjectCard';

import { Grid } from '@mui/material';

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