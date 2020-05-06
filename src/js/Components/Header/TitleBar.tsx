import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { commonStyles } from '../../style'

const useStyles = makeStyles({
    title: {
        fontSize: 18,
        textAlign: 'center'
    }
});

const LoginTitleBar = () => {
   const classes = useStyles();
   const commonClasses = commonStyles()
  return (
      <div className={commonClasses.subBackColor}>
        <AppBar position="fixed" className={commonClasses.subBackColor}>
        <Toolbar>
            <h2 className={classes.title + " " + commonClasses.subTextColor}>RFNOTE</h2>
        </Toolbar>
        </AppBar>
      </div>
  )
}
 export default  LoginTitleBar;