import * as React from 'react';
import { ContextContainer } from '../Page/SignUpPage'

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

const SignInput = () => {
    const classes = useStyles();
    const {
      email,
      setEmail, 
      password,
      setPassword,
      comparePassword,
      setComparePassword
    } = React.useContext(ContextContainer)

    const handleChange = (status) => (e) => {
      switch(status) {
        case 'EMAIL':
          setEmail(e.target.value)
          break;
        case 'PASSWORD':
          setPassword(e.target.value)
          break;
        case 'COMPARE_PASSWORD':
            setComparePassword(e.target.value)
          break;
        default:
          setEmail('')
          setPassword('')
          setComparePassword('')
      }
    };
  
    return (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                // id="filled-basic" 
                label="NewEmail"
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
                  // id="filled-adornment-password"
                  type={'password'}
                  value={password}
                  onChange={handleChange('PASSWORD')}
                />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={clsx(classes.textarea)} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Confirmation password</InputLabel>
                <FilledInput
                  // id="filled-adornment-password"
                  type={'password'}
                  value={comparePassword}
                  onChange={handleChange('COMPARE_PASSWORD')}
                />
            </FormControl>
          </Grid>
          </Grid>
        </>
    )
}
export default SignInput;