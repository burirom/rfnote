
import * as React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { commonStyles } from '../../style'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
    loginbtn: {
        width: '100%'
    },
    loginbtnbox: {
        paddingTop: '10px'
    }
});

const LoginInput = () => {
    const classes = useStyles();
    const commonClasses = commonStyles();
    return (
        <>
        <Grid container spacing={2} className={classes.loginbtnbox}>
        <Grid item xs={12}>
        <Link to="home">
           <Button variant="contained" disableElevation className={classes.loginbtn+" "+commonClasses.thirdBackColor}>
              Login
           </Button>
           </Link>
        </Grid>
        <Grid item xs={12}>
        <Link to="home">
           <Button variant="outlined" color="primary" disableElevation className={classes.loginbtn}>
             Google Login
           </Button>  
        </Link>
        </Grid>

        </Grid>
        </>
    )
}
export default LoginInput;