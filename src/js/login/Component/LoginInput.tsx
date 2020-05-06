import * as React from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { commonStyles } from '../../style'
import { common } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: '#ffffff'
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
    textarea: {
        width: '100%'
    }
});

const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        color: '#93deff',
        borderColor: '#93deff',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderWidth: 2,
        color: '#93deff',
        borderColor: '#93deff'   
      },
      '& input:hover': {
          
      }
    },
  })(TextField);

const LoginInput = () => {
    const classes = useStyles();
    const commonClasses = commonStyles()
    return (
        <>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <ValidationTextField
         id="outlined-search" 
         label="Username"
         type="search" 
         variant="outlined" 
         className={classes.textarea + " " + classes.textarea}
        />
        </Grid>
        <Grid item xs={12}>
        <ValidationTextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.textarea+" "+commonClasses.subTextColor}
        />
        </Grid>
        </Grid>
        
        </>
    )
}
export default LoginInput;