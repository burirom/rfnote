import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const CommonContainer = ({children}) => {
    return (
        <>
        <CssBaseline />
        <Container fixed>
           <Typography component="div" style={{ height: '100vh' }}>
               {children}
            </Typography>
        </Container>
        </>
    )
}

export default CommonContainer;