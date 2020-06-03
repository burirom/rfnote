import * as React from 'react';

import Grid from '@material-ui/core/Grid';


const GridCenter = ({children}) => {
    return (
        <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        {children}
        </Grid>
        </>
    )
} 

export default GridCenter;
