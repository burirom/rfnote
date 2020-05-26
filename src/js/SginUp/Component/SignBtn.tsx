
import * as React from 'react';
import clsx from 'clsx';
import { ContextContainer } from '../Page/SignUpPage'

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

const SignBtn = () => {
    const classes = useStyles();
    const commonClasses = commonStyles();
    const { handleEvent } = React.useContext(ContextContainer)
    return (
        <>
        <Grid container spacing={2} className={
            clsx(
              classes.loginbtnbox
            )
          }
        >
        <Grid item xs={12}>
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
                onClick={handleEvent}
            >
              SignUp
           </Button>
        </Grid>
        </Grid>
        </>
    )
}
export default SignBtn;