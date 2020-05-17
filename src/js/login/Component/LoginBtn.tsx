
import * as React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { store } from '../../Redux/store';
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
    console.log(store.getState())
    return (
        <>
        <Grid container spacing={2} className={
            clsx(
              classes.loginbtnbox
            )
          }
        >
        <Grid item xs={12}>
        <Link onClick={
            () => store.dispatch({ type: 'LOGIN', payload: true})
            } 
            to="home"
            className={
                clsx(commonClasses.txtDecration)
            }
        >
           <Button 
                variant="contained" 
                disableElevation 
                className={
                  clsx(
                    classes.loginbtn,
                    commonClasses.subBackColor,
                    commonClasses.subTextColor
                  )
                }
            >
              Login
           </Button>
           </Link>
        </Grid>
        <Grid item xs={12}>
        <Link 
            onClick={
                () => store.dispatch({ type: 'LOGIN', payload: true})
            } 
            to="home"
            className={
                commonClasses.txtDecration
            }
        >
            <Button variant="outlined"
                disableElevation 
                className={
                  clsx(
                    classes.loginbtn,
                    commonClasses.thirdTextColor,
                    commonClasses.borderSubColor
                  )
                }
            >
             Google Login
           </Button>  
        </Link>
        </Grid>

        </Grid>
        </>
    )
}
export default LoginInput;