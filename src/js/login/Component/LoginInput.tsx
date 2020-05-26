import * as React from 'react';
import { ContextContainer } from '../Page/Loginpage'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

//スタイル調整
const useStyles = makeStyles({
    root: {
        minWidth: 275
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

const LoginInput = () => {
    const classes = useStyles();
    const {
      email,
      setEmail, 
      password,
      setPassword 
    } = React.useContext(ContextContainer)

    const handleChange = (status) => (e) => {
      switch(status) {
        case 'EMAIL':
          setEmail(e.target.value)
          break;
        case 'PASSWORD':
          setPassword(e.target.value)
          break;
        default:
          setPassword('')
      }
    };
  
    return (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="filled-basic" 
                label="Username"
                type="search" 
                variant="filled" 
                className={
                  clsx(
                    classes.textarea
                  )
                }
                value={ email }
                onChange={handleChange('EMAIL')}     
              />
            </Grid>
          <Grid item xs={12}>
            <FormControl className={clsx(classes.textarea)} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={'password'}
                  value={password}
                  onChange={handleChange('PASSWORD')}
                />
          </FormControl>
          </Grid>
          </Grid>
        </>
    )
}
export default LoginInput;