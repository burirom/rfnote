import * as React from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { commonStyles } from '../../style'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import { common } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


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

const ValidationTextField = withStyles({
    // root: {
    //   '& input:valid + fieldset': {
    //     color: '#93deff',
    //     borderColor: '#93deff',
    //     borderWidth: 2,
    //   },
    //   '& input:invalid + fieldset': {
    //     borderColor: 'red',
    //     borderWidth: 2,
    //   },
    //   '& input:valid:focus + fieldset': {
    //     borderWidth: 2,
    //     color: '#93deff',
    //     borderColor: '#93deff'   
    //   },
    //   '& input:hover': {
          
    //   }
    // },
  })(TextField);

  // interface State {
  //   password: string;
  //   showPassword: boolean;
  // }

const LoginInput = () => {
    const classes = useStyles();
    const commonClasses = commonStyles()
    const [values, setValues] = React.useState({
      password: '',
      showPassword: false
    })
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ValidationTextField
              id="filled-basic" 
              label="Username"
              type="search" 
              variant="filled" 
              className={
                clsx(
                  classes.textarea
                )
              }
              />
            </Grid>
          <Grid item xs={12}>
            <FormControl className={clsx(classes.textarea)} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
          
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          </Grid>
          </Grid>
        </>
    )
}
export default LoginInput;